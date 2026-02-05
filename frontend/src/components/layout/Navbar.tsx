import { useState } from 'react';
import { useAuth } from '../../hooks/UseAuth';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <nav className="bg-slate-900 text-white px-4 py-3 shadow">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">ANH Beni</span>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 items-center">
          <span className="hover:text-blue-400 cursor-pointer">Dashboard</span>
          <button
            onClick={logout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3">
          <span className="hover:text-blue-400 cursor-pointer">Dashboard</span>
          <button
            onClick={logout}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
};
