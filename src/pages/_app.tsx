import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";
import '~/languages/i18n';
import NextNProgress from 'nextjs-progressbar';

import "~/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={inter.className}>
      <NextNProgress color="#000" />
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
