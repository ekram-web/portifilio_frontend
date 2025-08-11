export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0f15]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="text-center text-sm md:text-base text-gray-400">
          © {year} <span className="text-gray-200 font-semibold">Ekram</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
