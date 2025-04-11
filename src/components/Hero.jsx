export function Hero() {
  return (
    <div className="px-4 sm:px-10 mx-auto w-full xl:max-w-[100vw] lg:max-w-[90vw] flex flex-col lg:flex-row items-center justify-center">
      <div
        id="heroId"
        className="relative overflow-hidden bg-[#1a9959] rounded-xl mb-12 sm:mb-24 max-w-7xl mx-auto w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-10 sm:py-0 xl:py-6 gap-8 sm:gap-10 z-30 flex flex-col items-center xl:flex-row xl:items-center xl:justify-between">
          <div className="mx-0 max-w-xl sm:pt-8 xl:pt-0 sm:flex-shrink-0 flex flex-col justify-center">
            <h1 className="mt-6 sm:mt-4 xl:mt-0 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
              Villámgyors weboldalak, gondtalan vállalkozóélet
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 font-medium">
              Villámgyors weboldalak mellett, olyan csomagot is kínálunk, ahol
              havonta mi gondoskodunk a fejlesztésekről és frissítésekről, így
              neked semmivel sem kell foglalkoznod.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center gap-y-4 xs:gap-y-0 gap-x-4 sm:gap-x-6 justify-center sm:justify-normal">
              <a
                href="#contact"
                className="w-full xs:w-auto rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 text-sm xs:text-md sm:text-lg lg:text-xl font-semibold bg-white text-[#1a9959] shadow-sm transition ease-in-out hover:bg-gray-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
              >
                Kérj ajánlatot!
              </a>
              <a
                href="#pricing"
                className="w-full xs:w-auto rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 text-sm xs:text-md sm:text-lg lg:text-xl font-semibold text-white shadow-sm transition ease-in-out hover:bg-green-700 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
              >
                Tudj meg többet!
              </a>
            </div>
          </div>
          <div className="xl:w-full xl:min-w-lg md:max-w-2xl">
            <img
              className="rounded-3xl xl:w-full xl:h-auto"
              width={1000}
              height={800}
              src="/girlWithLaptop.jpg"
              alt="Laptop munkában"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
