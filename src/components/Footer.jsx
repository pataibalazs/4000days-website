import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Our goal", href: "#our-goal" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#073b3a]">
      <div className="mx-auto max-w-7xl overflow-hidden px-0 mt-10 sm:px-6 py-10 sm:py-10 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 flex justify-center space-x-10 sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6 hidden sm:flex">
              <Link
                href={item.href}
                className="text-sm leading-6 text-white hover:text-[#a3d9a5]"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          <div className="flex items-center flex-none">
            <Link href="#" className="no-underline mt-5">
              <img
                src="/without_bg.png"
                alt="DECKBAE Logo"
                className="h-14 w-auto hover:h-18 transition-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} 4000Days. All right reserved.
        </p>
      </div>
    </footer>
  );
}
