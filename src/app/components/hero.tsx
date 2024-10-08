"use client";
import Image from "next/image";
export default function HeroComponents() {
  return (
    <section>
      <div>
        <div className=" px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl ">
                  The best of best <br />
                  <span className="text-indigo-600">
                    Fragrance You Can Discover{" "}
                  </span>
                </h1>
                {/* <a
                  className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium  leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href=""
                  role="button"
                >
                  Get started
                </a>
                <a
                  className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium  leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  href=""
                  role="button"
                >
                  Learn more
                </a> */}
              </div>
              <div className="mb-12 lg:mb-0">
                <Image
                  width={500}
                  height={500}
                  src="/assets/FORDIVE-Atlantis.png"
                  className="w-full rounded-xl shadow-lg dark:shadow-black/20"
                  alt=""
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
