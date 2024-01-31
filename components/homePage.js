
export default function HomePage() {

  return (
    <>
      <div className="flex-col justify-center align-center pt-3">
        <input
          id="cela"
          type="text"
          className='w-40 rounded-3xl text-center text-[#223A7E] pt-1 items-center justify-center text-black text-xl bg-[#DCE5FF]'
        />
        CELA
        <button
          onClick={() => {}}
          className={`bg-[#A5BCFF] rounded-[17px] `}>
          <div className={`bg-[#3166FF] rounded-[15px] pt-2 pb-1 px-3 text-[#FFFFFF] text-md font-octarinebold cursor-pointer`}>
            submit
          </div>
        </button>
      </div>
      <div className="flex-col justify-center align-center pt-3">
        <input
          id="matic"
          type="text"
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
      </div> 
    </>
  )
}