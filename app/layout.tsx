import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Portal',
  description: 'School portal for students and admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
