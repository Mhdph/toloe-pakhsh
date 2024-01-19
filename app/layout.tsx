import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import QueryWrapper from '@/lib/QueryWrapper';
import {Metadata} from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'طلوع پخش',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='fa'>
      <body>
        <QueryWrapper>
          <Head>
            {/* Add the Goftino script */}
            <script type='text/javascript'>
              {`!function(){var i="Bmul43",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}("complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);})();`}
            </script>
          </Head>
          <Navbar />
          {children}
          <Footer />
        </QueryWrapper>
      </body>
    </html>
  );
}
