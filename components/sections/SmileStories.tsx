import Image from "next/image";

export default function SmileStories() {
  return (
    <section
      id="stories"
      className="py-32 bg-surface-bright relative overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-headline-lg text-on-surface">
            The Smile Stories
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* IMAGE SIDE */}
          <div className="lg:w-3/5 w-full">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-80 sm:h-105 md:h-125">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjb1RnNhflqiVQoZENombYWg2fvWUCd9LzvgTz1HSFj9zZ06fxadRfRCtVHDomt5xsC8N12LKU6BQ6LYIoiWxl44FIiItikOeMrRVQAKhy79bhhhhbyjRADNaXHEqq83Swwn1Ut2XYdPIPzu1icmjk8T0exb8wF-Ny3ZL_AIwpuwTffBVv4cXMu2zXYpdHFIrryxttY2F42tKd5Iyz12FEGSBVm1b2nx68svkCwGJUcA3S-p5EqQ5qwSyzhfjglXisx9Y_FzyyTz4"
                alt="Smile transformation patient"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />

              {/* Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] uppercase tracking-widest">
                Featured Story
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:w-2/5 w-full">
            <div className="space-y-8">
              <div className="p-6 md:p-8 bg-surface rounded-3xl shadow-sm border border-outline-variant/10">
                <p className="text-body-lg italic text-on-surface-variant mb-6 text-lg md:text-xl leading-relaxed">
                  "Lumina completely changed my perspective on dentistry. I used
                  to be terrified, but here, I feel like I'm at a high-end spa.
                  My results are beyond my wildest dreams."
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed" />

                  <div>
                    <p className="text-label-sm text-on-surface">Elena S.</p>
                    <p className="text-body-md text-[13px] text-on-surface-variant">
                      Smile Transformation Patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
