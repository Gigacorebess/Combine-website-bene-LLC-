'use client';
import { useEffect, useRef, useState } from 'react';
import type { Division } from '@/lib/divisions';

// Framed hero video: autoplays muted, pauses off-screen, follows the pointer and
// scroll slightly, and falls back to the division image if the video can't play.
export default function DivisionHeroMedia({ division, index }: { division: Division; index: number }) {
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const userPaused = useRef(false);
  const clip = division.video;

  useEffect(() => {
    const el = frame.current, v = video.current;
    if (!el) return;
    // A missing or unplayable file can error before hydration attaches onError.
    if (v && (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE)) { setFailed(true); return; }
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (v && !reduced) v.play().catch(() => {});
    if (v && reduced) userPaused.current = true;

    const io = new IntersectionObserver(([entry]) => {
      if (!v || userPaused.current) return;
      if (entry.isIntersecting) v.play().catch(() => {}); else v.pause();
    }, { threshold: 0.15 });
    io.observe(el);
    if (reduced) return () => io.disconnect();

    let px = 0, py = 0, raf = 0;
    const apply = () => {
      raf = 0;
      const sy = Math.min(scrollY, 900) * 0.06;
      el.style.setProperty('--mx', `${px * 14}px`);
      el.style.setProperty('--my', `${py * 10 + sy}px`);
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      px = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      py = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
      queue();
    };
    const onLeave = () => { px = 0; py = 0; queue(); };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    addEventListener('scroll', queue, { passive: true });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
      removeEventListener('scroll', queue);
    };
  }, [failed]);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) { userPaused.current = false; v.play().catch(() => {}); }
    else { userPaused.current = true; v.pause(); }
  };

  const showVideo = clip && !failed;
  return (
    <div ref={frame} className={'hero-media' + (playing ? ' is-playing' : '')}>
      <div className="hero-media-inner">
        {showVideo ? (
          <video
            ref={video}
            src={clip.src}
            poster={clip.poster}
            muted
            loop
            playsInline
            preload="auto"
            aria-label={clip.label}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
        ) : (
          <img src={division.image.src} alt={division.image.alt} width="720" height="450" />
        )}
      </div>
      <div className="hero-media-top" aria-hidden="true">
        <span>0{index} / {division.short.toUpperCase()}</span>
        <span>{division.subs.map(s => s.name).join(' · ')}</span>
      </div>
      <div className="hero-media-bottom">
        <span className="live-tag" aria-hidden="true"><i />{showVideo ? (playing ? 'LIVE' : 'PAUSED') : 'BENE'}</span>
        {showVideo && (
          <button type="button" className="media-toggle" onClick={toggle} aria-label={playing ? 'Pause background video' : 'Play background video'}>
            {playing ? <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.5" height="12" /><rect x="9.5" y="2" width="3.5" height="12" /></svg>
              : <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2l10 6-10 6z" /></svg>}
          </button>
        )}
      </div>
    </div>
  );
}
