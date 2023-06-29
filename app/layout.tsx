import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import QueryWrapper from '@/lib/QueryWrapper';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <QueryWrapper>
      <html lang='en'>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </QueryWrapper>
  );
}
