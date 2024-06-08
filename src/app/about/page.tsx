import Hero from "../components/carousel";

export default function aboutPage() {
  return (
    <section>
      <div className="hover:scale-105 duration-300 h-auto flex flex-col border-2 border-black m-5 justify-center align-items-center rounded-lg shadow-xl ">
        <h1 className="text-4xl text-right mr-5">About Us!</h1>
        <p className="mt-5 text-justify p-5">
          Welcome to DYY FRAGRANCE, Your Ultimate Destination for Premium
          Branded Fragrances! Founded in 2024, dyy fragrance has quickly emerged
          as a trusted name in the fragrance industry, specializing in the sale
          of high-quality, branded perfumes. We pride ourselves on being a
          reliable third-party platform that bridges the gap between luxury
          perfume brands and discerning customers who appreciate the art of fine
          fragrances.
        </p>
      </div>
      <div className="hover:scale-105 h-auto flex flex-col border-2 border-black m-5 justify-center align-items-center rounded-lg shadow-xl ">
        <h1 className="text-4xl text-left ml-5">WHY CHOOSE US?</h1>
        <ul className="mt-5 text-justify p-5">
          <li>
            <span className="font-bold">1. As a third-party seller</span>, we
            have strong relationships with top perfume brands and distributors,
            ensuring you receive only the best.
          </li>
          <li>
            <span className="font-bold">2. Convenience</span>, Shop from the
            comfort of your home and have your favorite scents delivered to your
            doorstep with ease.
          </li>
        </ul>
      </div>
      <div className="hover:scale-105 h-auto flex flex-col border-2 border-black m-5 justify-center align-items-center rounded-lg shadow-xl ">
        <h1 className="text-4xl text-center ">OUR VISION!</h1>
        <p className="mt-5 text-justify p-5">
          We envision a world where the perfect scent can be easily found and
          enjoyed by everyone. By offering a curated collection of branded
          perfumes, we aim to enhance your daily life with the confidence and
          charm that only a quality fragrance can provide.
        </p>
      </div>
    </section>
  );
}
