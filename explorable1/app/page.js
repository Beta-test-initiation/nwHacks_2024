import Image from "next/image";

export default function Home() {
  return (
    <section className="text-white text-5xl mt-40">
        <div>
          <div className="w-2/3 flex flex-col ml-32">
            <p className="text-4xl font-bold text-black ">Creating safe Guides </p>
            <p className="text-4xl font-bold text-black mt-5">to your Destinations</p>
            <button className="text-white bg-[#7975FF] rounded-lg">Get Started</button>
          </div>
          <div className="w-1/3">

          </div>
        </div>
    </section>
  );
}
