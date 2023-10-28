import type { Metadata } from 'next';
import '@/components/global.css';

export const metadata: Metadata = {
  title: 'Template',
  description: 'A Next.js template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
