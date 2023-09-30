import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";

import "~/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

// const ibm_serif = IBM_Plex_Serif({
//   weight: '400',
//   subsets: ['latin']
// })

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
