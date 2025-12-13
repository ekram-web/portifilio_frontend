

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b0f15] relative border-t border-white/10">
      {/* Soft glow line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-4 text-center">
        <p className="text-gray-300 text-xs md:text-sm tracking-wide">
          © {year} <span className="text-white font-semibold">Ekram Abdu</span>
        </p>

        <p className="text-[10px] text-gray-500 mt-1">
          Designed with passion & precision.
        </p>
      </div>
    </footer>
  );
}
