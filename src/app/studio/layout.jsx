// Separate root layout so the Studio gets neither the site's window shell
// nor its Tailwind styles.
export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
