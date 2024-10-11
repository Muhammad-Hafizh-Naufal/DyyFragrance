"use client";
import React, { useState, FormEvent } from "react";
export default function contactPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/contact", {
        method: "POST",
        body: formData,
      });

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Handle error if necessary
      console.log((error as Error).message);
    } finally {
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <section>
      <div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={onSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  disabled={isLoading}
                  className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
