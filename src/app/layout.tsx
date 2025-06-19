import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Resume Agent - LiveKit Agents Playground',
  description: 'A multimodal AI agent for resume building and career guidance using LiveKit Agents framework',
  keywords: ['AI', 'Resume', 'LiveKit', 'Agents', 'Voice AI', 'Video AI'],
  authors: [{ name: 'AI Resume Agent Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          {children}
        </div>
      </body>
    </html>
  );
} 