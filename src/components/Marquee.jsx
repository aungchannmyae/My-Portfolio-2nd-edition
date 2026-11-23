// Endless horizontal scroller (replaces @devnomic/marquee, which only
// supports React 18). The children are repeated so the loop has no gap;
// set the spacing with a `[--gap:…]` class and the speed with `[--duration:…]`.

const Marquee = ({
  children,
  reverse = false,
  fade = false,
  repeat = 4,
  className = "",
}) => (
  <div
    className={`flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
      fade
        ? "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        : ""
    } ${className}`}
  >
    {Array.from({ length: repeat }, (_, i) => (
      <div
        key={i}
        aria-hidden={i > 0 || undefined}
        className={`flex shrink-0 items-center justify-around [gap:var(--gap)] animate-marquee motion-reduce:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {children}
      </div>
    ))}
  </div>
);

export default Marquee;
