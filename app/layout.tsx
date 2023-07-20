import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import QueryWrapper from '@/lib/QueryWrapper';
import {Toaster} from 'react-hot-toast';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'طلوع پخش',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <QueryWrapper>
      <html lang='en'>
        <body>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </QueryWrapper>
  );
}
