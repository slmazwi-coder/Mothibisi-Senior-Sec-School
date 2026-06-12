import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'Activities', path: '/activities' },
  { name: 'General Application', path: '/admissions' },
  { name: 'Boarding Application', path: '/boarding' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="w-full sticky top-0 z-50" style={{ background: '#800020', borderBottom: '3px solid #FFFFFF' }}>
      <div className="w-full" style={{ borderBottom: '1px solid rgba(128,0,32,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md" style={{ border: '2px solid #FFFFFF' }}>
                <img src="/mslogo.jpg" alt="Mothibisi SSS logo" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-base leading-tight truncate">Mothibisi SSS</div>
                <div className="text-white/50 text-xs truncate">Thaba-Chicha, Mt Fletcher</div>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/student-login" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}>
                <User size={14} />
                Student Portal
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg transition-colors" style={{ color: '#FFFFFF' }} aria-label="Toggle menu">
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                location.pathname === link.path
                  ? 'text-[#800020] bg-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              )}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1" style={{ background: 'rgba(128,0,32,0.95)' }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                location.pathname === link.path
                  ? 'text-[#800020] bg-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              )}>
              {link.name}
            </Link>
          ))}
          <Link to="/student-login" onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10">
            <User size={16} />
            Student Portal
          </Link>
        </div>
      )}
    </nav>
  );
};