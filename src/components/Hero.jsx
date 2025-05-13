export function Hero() {
  return (
    <div className="px-4 sm:px-8 mx-auto w-full xl:max-w-[100vw] lg:max-w-4xl flex flex-col lg:flex-row items-center justify-center">
      <div
        id="heroId"
        className="relative overflow-hidden bg-white rounded-xl mb-12 sm:mb-24 max-w-7xl mx-auto w-full xl:py-8 border-[#073b3a] border-4 shadow-2xl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-10 sm:py-0 xl:py-6 gap-8 sm:gap-10 z-30 flex flex-col items-center xl:flex-row xl:items-center xl:justify-between">
          <div className="mx-0 max-w-xl sm:pt-8 xl:pt-0 sm:flex-shrink-0 flex flex-col justify-center">
            <h1 className="mt-6 sm:mt-4 xl:mt-0 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left text-[#073b3a]">
              Take Back Your Time
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-2xl leading-7 sm:leading-8 xl:mr-10 font-medium text-[#073b3a]">
              Did you know you spend around{" "}
              <span className="font-bold text-[#1a9959]">4000 days</span> of
              your life on social media — averaging{" "}
              <span className="font-bold text-[#1a9959]">3.2 hours</span> every
              day? Imagine what you could achieve if you reduced it to just{" "}
              <span className="font-bold text-[#1a9959]">30 minutes</span> a
              day.
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-2xl leading-7 sm:leading-8 xl:mr-10 font-medium text-[#073b3a]">
              <span className="font-bold text-[#1a9959]">
                We have the solution!
              </span>
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col xl:flex-row items-center gap-y-4 xl:gap-y-0 gap-x-4 xl:gap-x-6 justify-center lg:justify-center xl:justify-normal">
              <a
                href="https://chromewebstore.google.com/detail/4000-days-extension/hkmigjoopgdahhbdlopmcajccgdmlmej"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xl:w-auto rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 text-lg lg:text-xl font-semibold bg-[#073b3a] text-white shadow-sm transition ease-in-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
              >
                Download it!
              </a>
              <a
                href="#features"
                className="w-full xl:w-auto rounded-xl bg-[#a3d9a5] px-6 sm:px-8 py-2.5 sm:py-3 text-lg lg:text-xl font-semibold text-[#073b3a] shadow-sm transition ease-in-out hover:bg-[#a3d9a5] hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="xl:w-full xl:min-w-lg md:max-w-2xl">
            <img
              className="rounded-xl xl:w-full xl:h-auto"
              width={1000}
              height={800}
              src="/girlWithLaptop.jpg"
              alt="Focused work with laptop"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
