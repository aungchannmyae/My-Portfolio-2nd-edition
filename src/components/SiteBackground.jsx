// Decorative "desktop" behind the window card. Only visible from the xl
// breakpoint up; below that the card fills the screen.
const SiteBackground = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {/* Dot grid, fading out toward the edges */}
    <div className="absolute inset-0 bg-[radial-gradient(rgb(100_116_139/0.9)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />
    {/* Soft accent glow peeking out from under the card's bottom edge
        (the card sits at top 48px and is 600px tall on xl screens) */}
    <div className="absolute left-1/2 top-[648px] h-[220px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#df4f3e]/20 blur-3xl" />
  </div>
);

export default SiteBackground;
