import Shell from "@/components/Shell";
import SiteBackground from "@/components/SiteBackground";
import "./globals.css";

const title = "Aung Chan Myae Personal";
const description =
  "Aung Chan Myae (Junior Web Developer) Personal Portfolio Website";

// TODO: change to the Vercel domain once the site moves there.
const siteUrl = "https://aungchanmyaepersonalportfolio.netlify.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${title}` },
  description,
  icons: { icon: "/coding.png" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    images: ["/metaPic.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/metaPic.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" scrollbar-hide bg-slate-200">
        <SiteBackground />
        <main>
          <Shell>{children}</Shell>
        </main>
      </body>
    </html>
  );
}
