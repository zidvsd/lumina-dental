import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32  bg-surface-container-low overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative  h-125 md:h-150">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-tertiary-fixed-dim/20 rounded-full blur-3xl" />

            <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkg6LA3UCWlVYM14b0-1mD1mjS7ofTs1p8DLUrpf6B4asSCCxe0zyi7mLTPl77A9xjncyfHrAJsjqYhen18rMADOksRS-69YKCbf_Hi4cvKZ1nzF5BbVpCTG-B_BX98sMT4BvDVvjrQNydWUnl8TXNML5LoytBxp73enIbb6HXBLi_fIb6PoDJLLOE3EXInWky-gs2jA8PcZj5idtYUulRRJ96pUSK-P8jKjiFCE5wfvzVjYTUYeONywAwKu9fG1ITawdmF38KvLk"
                alt="Clinic Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-headline-lg text-on-surface mb-10">
              The Architecture of Calm
            </h2>

            <div className="space-y-12">
              <div className="border-l-2 border-primary/20 pl-8">
                <h3 className="text-headline-md text-primary mb-4">
                  Private Wellness Suites
                </h3>

                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Every treatment takes place in a private, soundproof suite
                  designed to eliminate clinical noise and prioritize your peace
                  of mind. High ceilings and curated art define the space.
                </p>
              </div>

              <div className="border-l-2 border-primary/20 pl-8">
                <h3 className="text-headline-md text-primary mb-4">
                  Sensory Curation
                </h3>

                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  From custom aromatherapeutics to tactile linen blankets, we
                  have curated every touchpoint to engage your senses in a
                  comforting, hospitality-first manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
