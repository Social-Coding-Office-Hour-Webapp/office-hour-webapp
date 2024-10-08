
function Calendar() {
  
  return (
    <div className=" w-[100vw] h-[100vh] bg-white">
      <div className="flex flex-row bg-black h-[5vh] place-content-between items-center px-5">
        <img
          className="bg-black w-[5vw] h-[5vh]"
          src="/images/UmnLogoPicture.png"
          alt="UMN Logo"
        ></img>

        <p className="text-white text-2xl ">
          {" "}
          University of Minnesota Office Hours
        </p>
        {/*Login button */}
        <button className=" flex flext-row px-5 bg-gradient-to-r from-[#2dd4bf] to-[#3b82f6] hover:from-[#ec4899] hover:to-[#f97316] rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
          <p className="text-white hover:underline hover:text-[#0ea5e9]">
            Login/SignUp
          </p>
        </button>
      </div>
      {/*Home button */}
      <div className="flex flex-row bg-[#06243A] h-[3vh] place-content-end items-center text-white ">
        <div className="bg-white text-black flex-row rounded-full hover:bg-[#0ea5e9]">
          <button className="flex flex-row px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </button>
        </div>
        <div className="flex flex-row">
          {/* settings icon */}
          <button className="flex flex-row px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#0ea5e9"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p className="hover:text-[#0ea5e9] hover:underline">Settings</p>
          </button>
        </div>
        {/* profile login */}
        <button className="flex flex-row px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#0ea5e9"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p className="hover:text-[#0ea5e9] hover:underline">Mourya Yandra</p>
        </button>
      </div>
      {/* Classes list */}
      <div className="flex place-content-end py-5 ">
        <div className="flex w-[24vw] bg-white drop-shadow-2xl rounded-md ">
          <div className=" px-5 w-[24vw] text-center content-start">
            <h1 className="text-4xl py-5">Classes</h1>
            <div className="py-5">
              <p className="bg-[#c084fc] rounded-full text-xl"> Phys 1301</p>
            </div>
            <div className="py-5">
              <p className="bg-[#fbbf24] rounded-full text-xl">CSE Calc 1321</p>
            </div>
            <button className="bg-white drop-shadow-2xl w-[15vw] border border-black/30 rounded-full hover:bg-[#e2e8f0]">
              add class +
            </button>
          </div>
        </div>

        <div className="flex justify-end py-5 px-5 ">
          <div className="rounded-md bg-white drop-shadow-2xl">
            {/* buttons for changing week */}
            <div className="w-[70vw] h-[10vh] grid grid-cols-3 place-items-center text-2xl">
              {/*left Button */}
              <button className=" bg-black flex text-white rounded-full hover:bg-[#0ea5e9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <p>Week</p>
              {/* right button */}
              <button className=" bg-black flex text-white rounded-full hover:bg-[#0ea5e9]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            {/** calendar */}

            
            <div className=" text-xl px-10 py-10 drop-shadow-2xl w-[70vw] h-[89vh] justify-items-center grid grid-cols-5 gap-2">
              <div className="w-[10vw] text-center">
                Mon
                <div className="grid grid-rows-1 py-5 ">
                  <div className="flex bg-[#c084fc] h-[15vh] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:bg-[#6366f1]">
                    <p className="w-[10vw]">Professor 8:00</p>
                  </div>
                </div>
                <div className="grid grid-rows-1 pb-5">
                  <div className="flex">
                    <p className="w-[10vw] h-[15vh] bg-[#fbbf24] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:bg-[#fde68a]">
                      8:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[10vw] text-center">
                Tue
                <div className="grid grid-rows-1 py-5">
                  <div className="flex ">
                    <p className="w-[10vw] h-[15vh] bg-[#fbbf24] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:bg-[#fde68a]">
                      8:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[10vw] text-center">
                Wed
                <div className="grid grid-rows-1 py-5">
                  <div className="flex">
                    <p className="w-[10vw] h-[15vh] bg-[#c084fc] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 hover:bg-[#6366f1]">
                      8:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[10vw] text-center">
                Thur
                <div className="grid grid-rows-1 py-5">
                  <div className="flex">
                    <p className="w-[10vw] h-[15vh] bg-[#fbbf24] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#fde68a]">
                      8:00
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[10vw] text-center">
                Fri
                <div className="grid grid-rows-1 py-5">
                  <div className="flex ">
                    <p className="w-[10vw] h-[15vh] bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                      8:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

