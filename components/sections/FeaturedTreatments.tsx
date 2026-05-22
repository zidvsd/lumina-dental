import Image from "next/image";
import { Shield } from "lucide-react";

export default function FeaturedTreatments() {
  return (
    <section id="treatments" className="py-32 bg-surface-container">
      <div className="container">
        {/* Header */}
        <div className="mb-20 flex justify-between items-end">
          <div>
            <span className="text-label-sm text-tertiary uppercase tracking-widest mb-4 block">
              Excellence
            </span>

            <h2 className="text-headline-lg text-on-surface">
              Artistry in Dentistry
            </h2>
          </div>

          <a
            href="#"
            className="text-label-sm text-primary underline underline-offset-2 md:underline-offset-8"
          >
            View all services
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LARGE CARD 1 */}
          <div className="md:col-span-8 relative overflow-hidden rounded-[40px] h-65 md:h-130 group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-1WymfPOqvKSdkC1Q-6mfawxFRarPCc93GM70Me6mdNWhx1HStCvl1GNLFulA9IukOlbioW7t3oYT0uyoOIn5xi2HXMXPRxqs9j3UkZgO1Rb0e91dENFTIw1UzooF-I2QqYJr4ZY-oUPEbpck-Xy9E80bsy9gONGCamqgLeLl3iCUTx_3jtBfxdohU4hj_QqQ3LfZmIcuqfG8xJRvqS_GN6VxdRqiFUl01-FqBwhY0dY9VTP5-jK6iQC_FsNk2Basau1ZjZTbIc"
              alt="Cosmetic Dentistry"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-on-surface/60 to-transparent p-6 md:p-12 flex flex-col justify-end text-white">
              <h3 className="text-headline-md mb-4">Cosmetic Dentistry</h3>

              <p className="text-body-md text-white/80 max-w-md">
                Precision veneers and bonding designed to harmonize with your
                natural facial features.
              </p>
            </div>
          </div>

          {/* SMALL CARD */}
          <div className="md:col-span-4 bg-tertiary-fixed p-8 md:p-12 rounded-[40px] flex flex-col gap-6 overflow-hidden">
            <div className="w-10 h-10 flex items-center justify-center text-on-tertiary-fixed">
              <Shield className="w-6 h-6" />
            </div>

            {/* IMAGE FIXED HEIGHT MOBILE */}
            <div className="relative w-full h-72 md:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1590062033099-a43ac5f82979?q=80&w=773&auto=format&fit=crop"
                alt="Invisalign treatment"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-headline-md text-on-tertiary-fixed mb-4">
                Invisalign®
              </h3>

              <p className="text-body-md text-on-tertiary-fixed-variant">
                Virtually invisible alignment for a seamless lifestyle
                integration.
              </p>
            </div>
          </div>

          {/* SECOND ROW SMALL CARD */}
          <div className="md:col-span-5 bg-surface-container-highest p-8 md:p-12 rounded-[40px] flex flex-col justify-between">
            <div>
              <h3 className="text-headline-md text-on-surface mb-4">
                Professional Whitening
              </h3>

              <p className="text-body-md text-on-surface-variant mb-8">
                Advanced light-activated technology for immediate, radiant
                results.
              </p>
            </div>

            <div className="relative w-full h-72 md:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk6wbnUFa-wVWWxxyTKeio4VB1KIKTVeVM_wYQd8o6NBSIKDEOess_tHhLPnJMXbLhaFqmSXqEYu8mWMJ7umeV62AXIS3YyS4pJDHw39-xPe5AyiyXetzghq1GOgS0dVCKofRoVn8zMzkZd2sSfyYU_8kc1GkEnnOP9_m12tDu5LkRFxgDcqwfPK7VTqlczuwJJyJ8e29DzvUzX-ugKyVpPx_CXGkUkCLc3mW0SJ1AZnB3ZpYir1i9Dtgvkq8kNQdz7Trse4Wow3A"
                alt="Whitening Lab"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* SECOND LARGE CARD */}
          <div className="md:col-span-7 relative overflow-hidden rounded-[40px] h-65 md:h-130 group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDTjZfGit2XrN_5aIJC6D-eaoLqJNwNFKFMx95gxLoFKJlaJ3CmtDoZ8EDjIyBxecThU3HFpJVfZTH5eIOmlxoukQ-_6esu8YdlNLhMTQgVbQRC-qURt4LcyVmTjhoGukQbrX9IuIesJJCPHBGu5tPps2R3oETv1TyI6Q8pODchxMu1unmek1d7bRdbtHIfjyRV1hrO8XVKjyfkvykXMQZf__9_K_Hc5_4AwVsZ5-dAVfsfA6_KPc1ZzW2kIE4e_PrXcY4RsbrhRU"
              alt="Family Care"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-on-surface/60 to-transparent p-6 md:p-12 flex flex-col justify-end text-white">
              <h3 className="text-headline-md mb-4">Family Care</h3>

              <p className="text-body-md text-white/80 max-w-md">
                Comprehensive wellness for every generation, from first visits
                to restorative care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
