import './globals.css';

export const metadata = {
  title: 'Next.js on Roxyon',
  description: 'A static Next.js site deployed to Roxyon.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
