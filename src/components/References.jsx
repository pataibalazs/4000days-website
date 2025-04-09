export default function References() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 sm:pt-6 pb-24 lg:max-w-7xl lg:px-8 text-center">
        <h2 className="text-base/7 font-bold text-[#1a9959]">Referenciák</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          Projektek amiket eddig csináltunk
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt="Deckbae - könnyűszerkezetes házak"
                src="/deckbaesite.png" // Optional: use your own local screenshot
                className="h-60 object-contain object-top"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-[#1a9959]">
                  Deckbae
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Könnyűszerkezetes házak online bemutatója
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  A deckbae.hu egy letisztult, gyors weboldal, amely bemutatja a
                  cég modern, fenntartható házmegoldásait. SEO-barát
                  kialakítással és mobiloptimalizálással készült.
                </p>
                <a
                  href="https://deckbae.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#1a9959] font-semibold hover:underline"
                >
                  Megnézem az oldalt →
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt="identity20xy weboldal"
                src="/identity20xy.png" // Ideally use a local screenshot
                className="h-60 object-contain bg-white"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-[#1a9959]">
                  identity20xy
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Experimentális dizájn és online identitás
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  A 20xy.club egy vizuálisan merész és technológiailag
                  formabontó oldal volt, amely egy kreatív művészi projektként
                  mutatta be a digitális önkifejezést. Egyedi animációk és
                  minimalista design jellemezte.
                </p>
                <a
                  href="https://web.archive.org/web/20221125172318/https://20xy.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-[#1a9959] font-semibold hover:underline"
                >
                  Megnézem az oldalt →
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt="NeuChat AI Assistant"
                src="/NeuChat.png" // Replace with your actual NeuChat image later
                className="h-60 object-contain bg-white"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-[#1a9959]">
                  NeuChat
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI asszisztens - NeuChat
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  A NeuChat mesterséges intelligencia alapú asszisztenseket
                  kínál, amelyek segítenek a digitális életed hatékonyabbá
                  tételében – a feladatkezeléstől kezdve a kérdések
                  megválaszolásáig, a nap 24 órájában.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
