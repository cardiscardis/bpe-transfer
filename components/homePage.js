import React from "react"

export default function HomePage() {

  const [parameters, setParameters] = React.useState()

  React.useEffect(() => {
    const handleStorageChange = () => {
      // Update parameters state when local storage changes
      const isConnected = localStorage.getItem('isConnected');
      const maticBalance = localStorage.getItem('maticBalance');
      const centBalance = localStorage.getItem('centBalance');
      // const otherParamsJSON = localStorage.getItem('otherParams');
      // const otherParams = otherParamsJSON ? JSON.parse(otherParamsJSON) : [];

      // Set parameters state
      setParameters({ isConnected, maticBalance, centBalance });
    }

    // Listen for changes in local storage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="text-2xl">{isConnected ? 'connected' : 'isConnected'} : </div>
      <div className="flex-col justify-center align-center pt-3">
        <input
          id="cela"
          type="text"
          placeholder="amount"
          className='w-40 rounded-3xl text-center text-[#223A7E] pt-1 items-center justify-center text-black text-xl bg-[#DCE5FF]'
        />
        TOKEN
        <button
          onClick={() => {}}
          className={`bg-[#A5BCFF] rounded-[17px] `}>
          <div className={`bg-[#3166FF] rounded-[15px] pt-2 px-3 text-[#FFFFFF] text-md font-octarinebold cursor-pointer`}>
            submit
          </div>
        </button>
        <div className="text-md">Token tx : </div>
      </div>
      <div className="flex-col justify-center align-center pt-3">
        <input
          id="matic"
          type="text"
          placeholder="amount"
          className='w-40 rounded-3xl text-center text-[#223A7E] pt-1 items-center justify-center text-black text-xl bg-[#DCE5FF]'
        />
        MATIC
        <button
          onClick={() => {}}
          className={`bg-[#A5BCFF] rounded-[17px] `}>
          <div className={`bg-[#3166FF] rounded-[15px] pt-2 pb-1 px-3 text-[#FFFFFF] text-md font-octarinebold cursor-pointer`}>
            submit
          </div>
        </button>
        <div className="text-md">Matic tx : </div>
      </div> 
    </>
  )
}