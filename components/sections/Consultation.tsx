import Image from "next/image";

export default function Consultation() {
  return (
    <section id="consultation" className="py-32 container mb-32 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-on-surface rounded-[60px] overflow-hidden ">
        {/* FORM SIDE */}
        <div className="p-10 md:p-16 lg:p-24">
          <h2 className="text-4xl md:text-5xl text-white mb-10 leading-tight">
            Begin the <br /> Transformation
          </h2>

          <form className="space-y-8">
            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-label-sm text-white/60 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 focus:border-tertiary-fixed-dim text-white py-3 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-label-sm text-white/60 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 focus:border-tertiary-fixed-dim text-white py-3 outline-none transition-colors"
                />
              </div>
            </div>

            {/* SERVICE */}
            <div>
              <label className="text-label-sm text-white/60 mb-2 block">
                Service of Interest
              </label>

              <select className="w-full bg-transparent border-b border-white/20 focus:border-tertiary-fixed-dim text-white/70 py-3 outline-none appearance-none transition-colors">
                <option>Cosmetic Dentistry</option>
                <option>Smile Makeover</option>
                <option>General Care</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-5 md:py-6 bg-white text-on-surface rounded-full text-label-sm tracking-widest uppercase hover:bg-tertiary-fixed transition-colors"
            >
              Schedule Consultation
            </button>
          </form>
        </div>

        {/* IMAGE SIDE */}
        <div className="hidden lg:block relative min-h-150">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWL54t_j6if9LtqG1a_X6Af6F6bURQCySqAH6GSy4tMU6hk2PqKvAOfUbRNJEbsfdDh0HUA9_4PBMjO5FEz4b26fH9uuYpAlB5n27uGRzzzJzZ85_iwx_Vfs9Rd7MkU3BnqZdS-aqjm0Drxh-jWmWKp_NltTQqTY97hXJVaheCgF-fNINz_zs44jE20mNz0Chx5m0ACq57cskCZ7JDp_CIzcB-abl_pqGPwf_VenJWY69N0Q-WUnnSEG2M7B-xgZ0OqdheBt33WXo"
            alt="Luxury dental clinic interior"
            fill
            sizes="50vw"
            className="object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-primary/20 backdrop-grayscale-[0.2]" />
        </div>
      </div>
    </section>
  );
}
