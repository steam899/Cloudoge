import "./globals.css";
export const metadata = { title: "CLOUDOGE - Sleep Meme Moon", description: "The dreamiest coin on World Chain" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}