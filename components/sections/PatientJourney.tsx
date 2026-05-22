import { MessageCircle, ScanLine, Sparkles, Smile } from "lucide-react";

export default function PatientJourney() {
  return (
    <section id="journey" className="py-32 bg-surface overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-display-lg text-on-surface mb-6">
            Your Path to Renewal
          </h2>

          <p className="text-body-lg text-on-surface-variant">
            A seamless, digital-first journey designed around your time and
            comfort.
          </p>
        </div>

        {/* Steps wrapper */}
        <div className="relative">
          {/* CONNECTING LINE (fixed centered behind icons) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-outline-variant/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-surface-container-high rounded-full mx-auto mb-8 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <MessageCircle className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
              </div>

              <h4 className="text-label-sm text-on-surface mb-3 tracking-widest uppercase">
                Consultation
              </h4>

              <p className="text-body-md text-on-surface-variant text-[14px]">
                Defining your aesthetic goals in a relaxed environment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-surface-container-high rounded-full mx-auto mb-8 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <ScanLine className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
              </div>

              <h4 className="text-label-sm text-on-surface mb-3 tracking-widest uppercase">
                Digital Scan
              </h4>

              <p className="text-body-md text-on-surface-variant text-[14px]">
                High-precision 3D mapping of your smile architecture.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-surface-container-high rounded-full mx-auto mb-8 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <Sparkles className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
              </div>

              <h4 className="text-label-sm text-on-surface mb-3 tracking-widest uppercase">
                Personalization
              </h4>

              <p className="text-body-md text-on-surface-variant text-[14px]">
                Customized care plans tailored to your unique profile.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-surface-container-high rounded-full mx-auto mb-8 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                <Smile className="w-6 h-6 text-primary group-hover:text-on-primary transition-colors" />
              </div>

              <h4 className="text-label-sm text-on-surface mb-3 tracking-widest uppercase">
                Confident Smile
              </h4>

              <p className="text-body-md text-on-surface-variant text-[14px]">
                The reveal of your new, naturally beautiful smile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
