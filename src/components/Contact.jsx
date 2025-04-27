"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xpwpkgoq");

  return (
    <div className="isolate bg-white px-6 sm:pt-6 pb-10 sm:pb-20 lg:px-8 mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base/7 font-bold text-[#a3d9a5]">Contact</h2>
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl mb-6">
          Write to us!
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Do you have any ideas to improve our service, or maybe you have found
          a bug, tell us!:)
        </p>
      </div>

      {state.succeeded ? (
        <div className="mx-auto mt-10 max-w-xl p-6 text-center bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1a9959] mb-2">
            Thank you for the message!
          </h3>
          <p className="text-gray-700">We will be in touch!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
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
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#1a9959]"
                  placeholder="What would you like to tell us?"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-600"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className="block w-full rounded-md bg-[#073b3a] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#16874d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a9959] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Küldés..." : "Küldés"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
