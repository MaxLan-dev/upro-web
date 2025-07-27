export default function CallToActionPage() {
  return (
    <section
      id="contact"
      className="bg-black relative overflow-hidden flex items-center justify-center"
      role="region"
      aria-labelledby="cta-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight tracking-tight mb-8 lg:mb-12"
            style={{
              fontFamily: "THE BOLD FONT",
              fontWeight: 900,
              color: "#D7E4D7",
            }}
          >
            READY TO START THE JOURNEY?
          </h2>
          <p
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed max-w-2xl"
            style={{
              color: "#D7E4D7",
              fontFamily:
                "Montserrat, -apple-system, Roboto, Helvetica, sans-serif",
              letterSpacing: "-0.12px",
              lineHeight: "1.33",
            }}
          >
            Download the app and start your free training experience today. No
            equipment needed — just a phone, a ball, and a love for the game.
          </p>
        </div>

        {/* Right Content - App Store Buttons */}
        <div
          className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:gap-6 flex-shrink-0"
          role="group"
          aria-label="Download app"
        >
          <button
            className="w-full bg-upro-green text-black font-medium text-lg lg:text-xl px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-[#020d02]"
            type="button"
            aria-label="Download U-Pro Soccer from App Store"
          >
            App Store
          </button>
          <button
            className="w-full bg-upro-green text-black font-medium text-lg lg:text-xl px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-[#020d02]"
            type="button"
            aria-label="Download U-Pro Soccer from Google Play Store"
          >
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
