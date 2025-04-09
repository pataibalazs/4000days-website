import Link from "next/link";

const navigation = {
  main: [
    { name: "Főoldal", href: "/" },
    { name: "Szolgáltatások", href: "/" },
    { name: "Árazás", href: "/teams" },
    { name: "Referenciák", href: "/contact" },
    { name: "Kontakt", href: "/contact1" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-0 mt-10 sm:px-6 py-10 sm:py-10 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 flex justify-center space-x-10 sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6 hidden sm:flex">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center space-x-10">
          <div className="flex items-center flex-none">
            <Link href="/" className="no-underline mt-5">
              <img
                src="/logo.png"
                alt="DECKBAE Logo"
                className="h-14 w-auto hover:h-18 transition-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} lab404. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
