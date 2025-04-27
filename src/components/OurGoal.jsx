import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OurGoal() {
  return (
    <div className="relative isolate bg-white sm:pt-6 px-6 pb-24 sm:pb-24 lg:px-8">
      {/* Background blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-4xl">
        <h2 className="text-base/7 font-bold text-[#a3d9a5] text-center">
          Time Usage
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-center">
          How does 70% of your free time disappear?
        </p>

        {/* Explanation text */}
        <p className="mt-8 text-base sm:text-xl leading-7 sm:leading-8 font-medium text-[#073b3a] text-left">
          If you sleep 8 hours, work 8.5 hours, commute 1 hour, and spend 2
          hours on daily tasks, you have about{" "}
          <span className="font-bold text-[#1a9959]">4.5 hours</span> of free
          time each day.
          <br />
          Of this, <span className="font-bold text-[#1a9959]">
            3.2 hours
          </span>{" "}
          is typically spent on social media — that's
          <span className="font-bold text-[#1a9959]"> more than 70%</span> of
          your free time.
        </p>

        {/* Balls legend */}
        <div className="mt-6 flex items-center gap-6 text-base font-medium justify-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-6 rounded-full bg-[#a3d9a5] border-2 border-[#073b3a] shadow"></span>
            <span className="text-[#073b3a] font-bold">
              = time spent on social media
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-6 rounded-full border-2 border-[#073b3a] bg-white"></span>
            <span className="text-[#073b3a] font-bold">= other free time</span>
          </div>
        </div>

        {/* Balls visualization - vertical layout */}
        <div className="mt-8 flex flex-col items-center gap-2">
          {Array.from({ length: 10 }).map((_, col) => (
            <div key={col} className="flex flex-row gap-4">
              {Array.from({ length: 10 }).map((_, row) => {
                const idx = col * 10 + row;
                return (
                  <span
                    key={row}
                    className={
                      idx < 71
                        ? "inline-block w-8 h-8 rounded-full bg-[#a3d9a5] border-2 border-[#073b3a] shadow"
                        : "inline-block w-8 h-8 rounded-full border-2 border-[#073b3a] bg-white"
                    }
                    style={{ margin: "1px" }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        {/* Inspiration section */}
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold text-[#1a9959] mb-2">
            Imagine what you could do with that time...
          </p>
          <p className="text-base text-gray-700">
            Build a business. Learn a language. Get in shape. Read books. Spend
            more time with loved ones. <br />
            The possibilities are endless!
          </p>
        </div>
      </div>
      {/* Pricing cards section would go below */}
    </div>
  );
}
