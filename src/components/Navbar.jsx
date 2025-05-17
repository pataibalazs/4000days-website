"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Our goal", href: "#our-goal" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#073b3a] py-2 mb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main navbar layout */}
        <div className="relative flex h-20 items-center justify-center">
          {/* Logo on the left */}
          <div className="absolute left-0 flex items-center">
            <a href="/">
              <img
                src="/without_bg.png"
                alt="Your Company"
                className="h-14 w-auto transition ease-in-out hover:scale-120"
              />
            </a>
          </div>

          {/* Centered desktop nav */}
          <div className="hidden md:flex md:space-x-8 mt-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-white hover:text-[#a3d9a5] hover:scale-110 transition ease-in-out"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo on the right */}
          <div className="absolute right-0 flex items-center hidden md:block">
            <a
              href="https://chromewebstore.google.com/detail/4000-days-extension/hkmigjoopgdahhbdlopmcajccgdmlmej"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#a3d9a5"
                className="size-10 hover:scale-150 transition ease-in-out"
              >
                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
              </svg>
            </a>
          </div>
          {/* Mobile menu button on the right */}
          <div className="absolute right-0 flex md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-[#a3d9a5] hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 data-[headlessui-state=open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 data-[headlessui-state=open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile nav items */}
      <DisclosurePanel className="md:hidden">
        <div className="flex flex-col items-end space-y-1 px-4 pt-2 pb-4">
          {navItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block text-base font-medium text-white hover:text-[#1a9959] hover:bg-gray-100 rounded-md px-3 py-2 transition"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
