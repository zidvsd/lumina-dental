import { CreditCard, ShieldCheck } from "lucide-react";

export default function PaymentInsurance() {
  return (
    <section id="insurance" className="py-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* PAYMENT CARD */}
          <div className="flex-1 p-8 md:p-12 bg-surface-container rounded-[40px]">
            <CreditCard className="w-10 h-10 text-primary mb-8" />

            <h3 className="text-headline-md text-on-surface mb-6">
              Transparent Value
            </h3>

            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
              We offer flexible 0% interest payment plans through our luxury
              partners, ensuring excellence is accessible.
            </p>

            {/* partner placeholders */}
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-8 w-24 bg-primary/20 rounded" />
              <div className="h-8 w-24 bg-primary/20 rounded" />
            </div>
          </div>

          {/* INSURANCE CARD */}
          <div className="flex-1 p-8 md:p-12 bg-surface rounded-[40px] border border-outline-variant/30 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-tertiary mb-8" />

            <h3 className="text-headline-md text-on-surface mb-6">
              Seamless Insurance
            </h3>

            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Our dedicated concierge team handles all insurance claims
              directly, so you can focus solely on your comfort.
            </p>

            <a
              href="#"
              className="text-label-sm text-primary underline underline-offset-8"
            >
              Check Coverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
