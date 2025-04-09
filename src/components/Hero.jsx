export function Hero() {
  return (
    <div
      id="heroId"
      className="relative overflow-hidden bg-[#1a9959] mt-1 mx-6 rounded-xl mb-24"
    >
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-20 gap-10 z-30 xxs:items-center xxs:flex xxs:flex-col lg:flex lg:flex-row lg:items-normal lg:justify-normal">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 xxs:text-4xl md:text-5xl font-bold tracking-tight text-pageColors-1 xxs:text-center lg:text-left xxs:mt-20 lg:mt-0">
            Villámgyors weboldalak, gondtalan vállalkozóélet
          </h1>
          <p className="mt-6 text-lg leading-8 text-pageColors-1 font-medium">
            Villámgyors weboldalak mellett, olyan csomagot is kínálunk, ahol
            havonta mi gondoskodunk a fejlesztésekről és frissítésekről, így
            neked semmivel sem kell foglalkoznod.
          </p>
          <div className="mt-10 flex items-center gap-x-6 xxs:justify-center lg:justify-normal">
            <a
              href="#contact"
              className="rounded-xl px-8 py-3 text-xl font-semibold bg-white text-[#1a9959] shadow-sm transition ease-in-out hover:bg-gray-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Kérj ajánlatot!
            </a>
            <a
              href="#pricing"
              className="rounded-xl px-8 py-3 text-xl font-semibold  text-white shadow-sm transition ease-in-out hover:bg-green-700 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Tudj meg többet!
            </a>
          </div>
        </div>
        <div className="xl:mt-0 lg:mt-20 xxs:max-w-lg lg:max-w-2xl">
          <img
            className="rounded-3xl"
            width={1000}
            height={800}
            src="/girlWithLaptop.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
