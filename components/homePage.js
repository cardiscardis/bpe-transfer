
import { useWeb3Modal } from "@web3modal/wagmi/react";

import { useAccount } from "wagmi";


export default function HomePage() {

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  return (
    <>
        <div className="flex flex-col justify-center align-center">
          <>
            <button 
              onClick={() => open()}
              className="bg-black"
            >
              Connect
            </button>
          </>
          <div className="bg-black" >
          {isConnected ? `${address} Connected` : "Not Connected"}
        </div>
        </div>
    </>
  )
}