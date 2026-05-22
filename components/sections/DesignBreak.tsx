import Image from "next/image";

export default function DesignBreak() {
  return (
    <section className="relative h-105 md:h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1675686363507-22a8d0e11b4c?q=80&w=903&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        quality={100}
        alt="Atmospheric dental clinic environment"
        fill
        sizes="100vw"
        className="object-cover brightness-90"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Quote */}
      <div className="relative text-center px-6">
        <h2 className="text-5xl md:text-6xl text-white max-w-4xl italic leading-tight">
          Every smile deserves gentle care.
        </h2>
      </div>
    </section>
  );
}
