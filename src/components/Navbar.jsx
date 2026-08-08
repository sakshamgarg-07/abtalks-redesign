import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 font-bold">
          A
        </div>

        <span className="text-lg font-bold text-white">
          ABTalks
        </span>
      </div>

      {/* Mobile menu */}
      <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white">
        <Menu size={20} />
      </button>
    </nav>
  );
}

export default Navbar;