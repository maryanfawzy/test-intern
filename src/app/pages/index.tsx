import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skinstric - Sophisticated Skincare</title>
      </Head>
      <main className="relative flex items-center justify-center h-screen bg-primary text-black">
        {/* Header */}
        <header className="absolute top-0 w-full flex justify-between px-8 py-4">
          <span className="font-roobert text-sm tracking-wide">SKINSTRIC [ INTRO ]</span>
          <button className="bg-black text-white px-4 py-2 text-sm uppercase">Enter Code</button>
        </header>

        {/* Main content */}
        <div className="w-full max-w-screen-xl text-center">
          <h1 className="font-roobert text-[128px] font-light leading-[120px] tracking-[-0.07em]">
            Sophisticated <br /> skincare
          </h1>
        </div>

        {/* Buttons on the sides */}
        <div className="absolute left-10 bottom-10 text-sm flex items-center gap-2">
          <span className="border border-black p-2">◇</span>
          <p>DISCOVER A.I.</p>
        </div>

        <div className="absolute right-10 bottom-10 text-sm flex items-center gap-2">
          <p>TAKE TEST</p>
          <span className="border border-black p-2">◇</span>
        </div>
      </main>
    </>
  );
}
