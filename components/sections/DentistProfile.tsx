import Image from "next/image";

export default function DentistProfile() {
  return (
    <section id="dentist" className="py-32 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center container mx-auto">
        {/* IMAGE SIDE */}
        <div className="relative h-105 md:h-175">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxqawKZxMq9kFZiXkgsAWRed6kt85ApY5631LXZUx2tliPS8P5IS_k1NglurlhtVkE6qbDgzcSFJEiNkwMPgpv6SAOzOg0zfZ08yr_7d31dFzXZFJ9n7jNMD7nrCFZ0CVuXIZek2b1qKuDNwcoB_MQEUGc-OWp-B4wN8mYz6nAdomPlMaToejaJv0iz2CEtevIQ_PcMfgBY0SSECH3stooEXycxBnyGRoKWSHnt_KFNnW4Pego3BsfUK-2f8Pc2j58RhXvH0THnMA"
            alt="Dr. Julian Vance"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded-[100px_4px_100px_4px] shadow-xl"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-6 md:p-10 rounded-2xl hidden md:block">
            <p className="text-display-lg text-[32px] md:text-[40px] leading-tight">
              20+
            </p>
            <p className="text-label-sm tracking-widest uppercase">
              Years of Artistry
            </p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>
          <span className="text-label-sm text-tertiary uppercase tracking-widest mb-6 block">
            Our Founder
          </span>

          <h2 className="text-display-lg text-on-surface mb-8 leading-tight">
            Dr. Julian Vance
          </h2>

          <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
            "My philosophy is rooted in the belief that dentistry should be as
            restorative for the soul as it is for the smile. We don't just treat
            teeth; we care for people in an environment that honors their need
            for peace and excellence."
          </p>

          {/* Signature */}
          <div className="signature text-4xl text-primary mb-12">
            Julian Vance
          </div>

          {/* Button */}
          <button className="border-b-2 border-primary pb-2 text-label-sm tracking-widest uppercase hover:text-tertiary transition-colors">
            Read the Full Story
          </button>
        </div>
      </div>
    </section>
  );
}
