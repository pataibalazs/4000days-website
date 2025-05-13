import {
  EyeSlashIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  AdjustmentsHorizontalIcon,
  CloudIcon,
  SwatchIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Blur",
    icon: EyeSlashIcon,
    imgClass: "rounded-lg blur-sm",
  },
  {
    name: "Vibrate",
    icon: DevicePhoneMobileIcon,
    imgClass: "rounded-lg contrast-125",
  },
  {
    name: "Wobble",
    icon: ArrowPathIcon,
    imgClass: "rounded-lg sepia",
  },
  {
    name: "Grayscale",
    icon: AdjustmentsHorizontalIcon,
    imgClass: "rounded-lg grayscale",
  },
  {
    name: "Breathe",
    icon: CloudIcon,
    imgClass: "rounded-lg brightness-75",
  },
  {
    name: "Color shift",
    icon: SwatchIcon,
    imgClass: "rounded-lg blur-none",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-12 sm:pt-6 pb-32 sm:pb-32 px-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-bold text-[#a3d9a5]">Features</h2>
          <p className="inline text-4xl font-semibold tracking-tight text-[#073b3a]">
            Take back your power!
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 text-inline">
            Developers spend months making social media as addictive and
            immersive as possible — but what if it all started to...
          </p>
        </div>
      </div>
        <div className="mx-auto mt-10 max-w-7xl sm:px-6 sm:mt-10 md:mt-14 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => {
              // Extra classes based on feature name
              let extraClass = "";
              if (feature.name === "Wobble") extraClass = "animate-wobble";
              if (feature.name === "Vibrate") extraClass = "animate-vibrate";
              if (feature.name === "Breathe") extraClass = "animate-breathe";
              if (feature.name === "Color shift")
                extraClass = "animate-colorshift";

              return (
                <div key={feature.name} className="relative sm:pl-9">
                  <dt className="font-semibold text-gray-900 flex items-center justify-center gap-2">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-[#073b3a]"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4">
                    <img
                      src="/ig_pic.png"
                      alt="Feature"
                      className={`w-full h-80 object-cover ${feature.imgClass} ${extraClass}`}
                    />
                  </dd>
                </div>
              );
            })}
          </dl>
        <div className="mt-10 mx-auto max-w-3xl rounded-xl bg-[#f5fdf8] border border-[#1a9959]/20 shadow-lg px-8 py-8 text-center">
          <p className="text-2xl font-bold text-[#1a9959] mb-2">
            More effects are waiting for you on the extension.
          </p>
          <p className="text-lg text-gray-800 mb-1">
            And there's even more! Our effects work on every site.
          </p>
          <p className="text-lg text-gray-800 mb-1">
            Need a break? Use the{" "}
            <span className="font-semibold text-[#1a9959]">cheat button</span>{" "}
            for 10 minutes of distraction-free browsing.
            <br />
            <span className="text-sm text-[#1a9959] font-semibold">
              (You can use it once per day!)
            </span>
          </p>
          <p className="text-base text-gray-500 italic mt-2">
            The problem isn’t usage — it’s overusage. :)
          </p>
        </div>
      </div>
    </div>
  );
}
