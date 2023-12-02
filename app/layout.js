import './globals.css';

export const metadata = {
  title: 'Lorcana Tracker by Terry',

  description: 'A utility to track your Lorcana games through every stage',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
