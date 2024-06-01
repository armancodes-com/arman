import Image from "next/image";
import { firaCode } from "./fonts";

export default function Home() {
  return (
    <main className="pt-14.5">
      <section className="flex h-[350px] gap-x-14">
        <article className="flex flex-1 flex-col gap-y-4 py-10">
          <div className="w-21 rounded-5 block h-1 min-h-1 bg-[#7127BA]"></div>

          <div className={`text-title1 ${firaCode.className} font-bold`}>
            <h1>Arman</h1>
            <h2 className="text-3xl text-primary">Back-end Engineer</h2>
          </div>

          <p className="text-body1 text-text-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Egestas purus viverra accumsan
          </p>
        </article>
        <figure className="rounded-20 shadow-heroImage2 relative h-[422px] w-[384px] flex-1 rotate-6 overflow-hidden">
          <Image
            src={"/images/avatar.webp"}
            alt="hero images"
            fill
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </section>
    </main>
  );
}
