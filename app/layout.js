import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Thuận Thiên - Portfolio',
  description: 'Portfolio cá nhân của Thuận Thiên, lập trình viên',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}