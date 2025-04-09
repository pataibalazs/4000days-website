"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Főoldal", href: "#" },
  { name: "Szolgáltatások", href: "#features" },
  { name: "Árazás", href: "#pricing" },
  { name: "Referenciák", href: "#references" },
  { name: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white mb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main navbar layout */}
        <div className="relative flex h-20 items-center justify-center">
          {/* Logo on the left */}
          <div className="absolute left-0 flex items-center">
            <a href="/">
              <img
                src="/logo.png"
                alt="Your Company"
                className="h-16 w-auto transition ease-in-out hover:scale-110"
              />
            </a>
          </div>

          {/* Centered desktop nav */}
          <div className="hidden md:flex md:space-x-8 mt-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-medium text-black hover:text-[#1a9959]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button on the right */}
          <div className="absolute right-0 flex md:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1a9959]">
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
              className="block text-base font-medium text-gray-700 hover:text-[#1a9959] hover:bg-gray-100 rounded-md px-3 py-2 transition"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
