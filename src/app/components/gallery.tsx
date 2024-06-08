import Image from "next/image";
import Link from "next/link";
export default function galleryComponents() {
  return (
    <section>
      <div className="mt-5 ">
        <h1 className="text-5xl text-center font-bold">Collections</h1>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 ">
          <div className="-m-1 flex flex-wrap md:-m-2 ">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2 hover:opacity-50">
                <Link href="/">
                  <Image
                    width={500}
                    height={500}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/ALCHEMIST-PDP-WEBSITE-OUTWEST-10_900x.png"
                  />
                </Link>
              </div>
              <div className="w-1/2 p-1 md:p-2 hover:opacity-50">
                <Link href="">
                  <Image
                    width={500}
                    height={500}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/LAYR-ForbiddenGarden.png"
                  />
                </Link>
              </div>
              <div className="w-full p-1 md:p-2 hover:opacity-50">
                <Link href="">
                  <Image
                    width={500}
                    height={500}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/FORDIVE-Utopia.png"
                  />
                </Link>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2 hover:opacity-50">
                <Link href="">
                  <Image
                    width={500}
                    height={500}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/ALCHEMIST-PDP-WEBSITE-POWDERROOM_900x.png"
                  />
                </Link>
              </div>
              <div className="w-1/2 p-1 md:p-2 hover:opacity-50">
                <Link href="">
                  <Image
                    width={500}
                    height={500}
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="/assets/LAYR-KyotoJazz.png"
                  />
                </Link>
              </div>
              <div className="w-1/2 p-1 md:p-2 hover:opacity-50">
                <Image
                  width={500}
                  height={500}
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="/assets/FORDIVE-Shelby.png"
                />
                <Link href=""></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
