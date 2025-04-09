"use client";

import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white px-6 sm:pt-6 pb-10 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base/7 font-bold text-[#1a9959]">Kapcsolat</h2>
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl mb-6">
          Írj nekünk
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Vedd fel velünk a kapcsolatot e-mailben, és 1 munkanapon belül
          válaszolunk.
        </p>
      </div>

      <form
        action="#"
        method="POST"
        className="mx-auto mt-10 max-w-xl sm:mt-10"
      >
        <div className="grid grid-cols-1 gap-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#1a9959]"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Üzenet
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#1a9959]"
                placeholder="Miben segíthetünk?"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="block w-full rounded-md bg-[#1a9959] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#16874d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a9959]"
            >
              Küldés
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
