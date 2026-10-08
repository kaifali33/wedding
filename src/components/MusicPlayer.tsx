"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Music, Pause } from "lucide-react";

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const MusicContext = createContext<MusicContextType>({
  isPlaying: false,
  togglePlay: () => {},
  playMusic: () => {},
  pauseMusic: () => {},
});

export const useMusicPlayer = () => useContext(MusicContext);

const YOUTUBE_VIDEO_ID = "wluOl69d-Qg";

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  setVolume: (volume: number) => void;
  destroy?: () => void;
}

interface YTOnReadyEvent {
  target: YTPlayerInstance;
}

interface YTOnStateChangeEvent {
  data: number;
  target: YTPlayerInstance;
}

interface YTNamespace {
  Player: new (
    elementId: string,
    options: {
      height: string;
      width: string;
      videoId: string;
      playerVars?: Record<string, unknown>;
      events?: {
        onReady?: (event: YTOnReadyEvent) => void;
        onStateChange?: (event: YTOnStateChangeEvent) => void;
        onError?: (err: unknown) => void;
      };
    }
  ) => YTPlayerInstance;
}

interface WindowWithYT extends Window {
  YT?: YTNamespace;
  onYouTubeIframeAPIReady?: (() => void) | undefined;
}

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const isReadyRef = useRef<boolean>(false);
  const pendingPlayRef = useRef<boolean>(false);

  const initPlayer = useCallback(() => {
    if (playerRef.current) return;
    const win = window as unknown as WindowWithYT;
    if (!win.YT || !win.YT.Player) return;

    try {
      playerRef.current = new win.YT.Player("youtube-audio-player-element", {
        height: "1",
        width: "1",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          enablejsapi: 1,
          origin: typeof window !== "undefined" ? window.location.origin : undefined,
        },
        events: {
          onReady: (event: YTOnReadyEvent) => {
            isReadyRef.current = true;
            try {
              event.target.setVolume(80);
            } catch {}
            if (pendingPlayRef.current) {
              pendingPlayRef.current = false;
              try {
                event.target.playVideo();
                setIsPlaying(true);
              } catch (err) {
                console.warn("YouTube play on ready error:", err);
              }
            }
          },
          onStateChange: (event: YTOnStateChangeEvent) => {
            // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
            if (event.data === 1) {
              setIsPlaying(true);
            } else if (event.data === 2) {
              setIsPlaying(false);
            } else if (event.data === 0) {
              // Loop video seamlessly
              try {
                event.target.playVideo();
              } catch {}
            }
          },
          onError: (err: unknown) => {
            console.warn("YouTube player error:", err);
          },
        },
      });
    } catch (err) {
      console.warn("Failed to initialize YouTube player:", err);
    }
  }, []);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const win = window as unknown as WindowWithYT;

    if (win.YT && win.YT.Player) {
      initPlayer();
      return;
    }

    // Set callback
    const prevCallback = win.onYouTubeIframeAPIReady;
    win.onYouTubeIframeAPIReady = () => {
      if (prevCallback) prevCallback();
      initPlayer();
    };

    // Inject IFrame API script if not already present
    if (!document.getElementById("youtube-iframe-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);
    }
  }, [initPlayer]);

  const playMusic = useCallback(() => {
    if (
      playerRef.current &&
      isReadyRef.current &&
      typeof playerRef.current.playVideo === "function"
    ) {
      try {
        playerRef.current.playVideo();
        setIsPlaying(true);
      } catch (err) {
        console.warn("YouTube playVideo failed:", err);
      }
    } else {
      pendingPlayRef.current = true;
      setIsPlaying(true);
    }
  }, []);

  const pauseMusic = useCallback(() => {
    pendingPlayRef.current = false;
    if (
      playerRef.current &&
      isReadyRef.current &&
      typeof playerRef.current.pauseVideo === "function"
    ) {
      try {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } catch (err) {
        console.warn("YouTube pauseVideo failed:", err);
      }
    } else {
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }, [isPlaying, pauseMusic, playMusic]);

  useEffect(() => {
    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <MusicContext.Provider
      value={{ isPlaying, togglePlay, playMusic, pauseMusic }}
    >
      {/* Hidden container for YouTube IFrame player (no visual display, zero layout impact) */}
      <div
        id="youtube-audio-container"
        className="fixed -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <div id="youtube-audio-player-element" />
      </div>

      {/* Floating music control button on desktop */}
      <FloatingMusicButton isPlaying={isPlaying} togglePlay={togglePlay} />

      {children}
    </MusicContext.Provider>
  );
};

export const FloatingMusicButton: React.FC<{
  isPlaying: boolean;
  togglePlay: () => void;
}> = ({ isPlaying, togglePlay }) => {
  return (
    <div className="hidden md:flex fixed top-4 right-6 z-50 items-center gap-2 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none text-xs bg-wedding-maroon-deep/90 text-wedding-gold-light border border-wedding-gold/30 px-2.5 py-1 rounded-full shadow-lg font-serif">
        {isPlaying ? "Pause Music" : "Play Wedding Melody"}
      </div>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause wedding music" : "Play wedding music"}
        className={`relative flex items-center justify-center w-11 h-11 rounded-full border border-wedding-gold/70 shadow-gold transition-all duration-300 transform active:scale-95 ${
          isPlaying
            ? "bg-wedding-maroon text-wedding-gold ring-2 ring-wedding-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            : "bg-wedding-maroon-deep/80 backdrop-blur-md text-wedding-gold-light/80 hover:text-wedding-gold hover:border-wedding-gold"
        }`}
      >
        {/* Pulsing halo when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping bg-wedding-gold/20 pointer-events-none" />
        )}

        {/* Icon */}
        {isPlaying ? (
          <div className="flex items-center justify-center">
            <Pause className="w-5 h-5 animate-pulse" />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Music className="w-5 h-5" />
          </div>
        )}

        {/* Small badge dot */}
        <span
          className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-wedding-maroon-deep transition-colors ${
            isPlaying ? "bg-emerald-400 animate-pulse" : "bg-wedding-gold/40"
          }`}
        />
      </button>
    </div>
  );
};

export default FloatingMusicButton;
