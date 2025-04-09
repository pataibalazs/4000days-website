import {
  HomeIcon,
  BoltIcon,
  LightBulbIcon,
  GlobeEuropeAfricaIcon,
  WalletIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Foglalkozz azzal, ami igazán számít!",
    description:
      "A Lab404 havidíjas szolgáltatásként gondoskodik weboldalad karbantartásáról és fejlesztéséről, így te a vállalkozásodra koncentrálhatsz.",
    icon: HomeIcon,
  },
  {
    name: "Villámgyors kivitelezés",
    description:
      "Akár 1-2 héten belül elkészítjük a teljes weboldalt, hogy minél előbb online lehess – hatékony és megbízható munkavégzéssel.",
    icon: BoltIcon,
  },
  {
    name: "Modern technológia",
    description:
      "Next.js-alapú megoldásaink nemcsak gyorsak, de kiváló SEO-teljesítményt is nyújtanak a jobb Google-pozíciókért.",
    icon: LightBulbIcon,
  },
  {
    name: "Nemzetközi minőség",
    description:
      "Külföldi piacokra is alkalmas, professzionális weboldalakat készítünk – versenyképes megjelenéssel és stabil háttérrel.",
    icon: GlobeEuropeAfricaIcon, // Jobban illik a “nemzetközi”-hez
  },
  {
    name: "Megfizethető árak",
    description:
      "Minőségi weboldal kisvállalkozóknak is elérhető áron – alacsony fenntartási költségek és átlátható díjszabás.",
    icon: WalletIcon, // Jobban illik a “költséghatékony”-hoz
  },
  {
    name: "Stabil háttér, tapasztalt csapat",
    description:
      "Több éves tapasztalat, precizitás és ügyfélközpontúság jellemzi munkánkat – nálunk biztos kezekben van a projekted.",
    icon: ShieldCheckIcon, // Jobban kifejezi a szakértelem és megbízhatóság érzetét
  },
];

export default function Features() {
  return (
    <div className="bg-white py-12 sm:pt-6 sm:pb-32 px-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-bold text-[#1a9959]">
            Szolgáltatások
          </h2>
          <p className="inline text-4xl font-semibold tracking-tight text-gray-900">
            Készen állsz az új weboldaladra?
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 text-inline">
            A lab404 csapata teljes körű webfejlesztési szolgáltatásokat nyújt
            modern vállalkozások számára. Gyors, megbízható és folyamatosan
            fejleszthető digitális megoldások – egy helyen.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-5 sm:pt-10">
        <div className="sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="/1girl.jpg"
            width={2432}
            height={1442}
            className="mb-[-5%] rounded-xl ring-1 shadow-2xl ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl sm:px-6 sm:mt-10 md:mt-14 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="font-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-[#1a9959]"
                />
                {feature.name}
              </dt>
              <dd className="mt-2">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
