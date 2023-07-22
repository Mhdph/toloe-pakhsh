import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import QueryWrapper from '@/lib/QueryWrapper';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'طلوع پخش',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <QueryWrapper>
          <Navbar />
          {children}
          <Footer />
        </QueryWrapper>
      </body>
    </html>
  );
}
