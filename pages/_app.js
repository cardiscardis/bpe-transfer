
import '@/styles/globals.css'

import { Web3Modal } from '@/components/web3Modal';
import { useEffect, useState } from "react";

export const metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example',
};
export default function App({ Component, pageProps, children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <Web3Modal>
          <Component {...pageProps} />
          {children}
          </Web3Modal>
      ) : null}
    </>
  );
}
