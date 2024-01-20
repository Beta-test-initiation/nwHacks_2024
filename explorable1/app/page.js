import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-white text-5xl mt-40">
        <div className="flex ">
          <div className="w-2/3 flex flex-col ml-32">
            <p className="text-4xl font-bold text-black ">Creating safe Guides </p>
            <p className="text-4xl font-bold text-black mt-5">to your Destinations</p>
            <Link href="/enterdest">
              <button className="w-28 mt-10 p-3 text-sm text-white bg-[#7975FF] rounded-lg">Get Started</button>
            </Link>
          </div>
          <div className="w-1/3 " style={{ position: 'fixed', bottom: 0, right: 0 }}>
            <Image height={250} width={300} src="/assets/phone.png">

            </Image>
          </div>
        </div>
    </section>
  );
}
