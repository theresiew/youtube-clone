import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home',     path: '/',                emoji: '🏠' },
    { label: 'Trending', path: '/search/Trending', emoji: '🔥' },
    { label: 'Coding',   path: '/search/Coding',   emoji: '💻' },
    { label: 'Music',    path: '/search/Music',    emoji: '🎵' },
    { label: 'Gaming',   path: '/search/Gaming',   emoji: '🎮' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-[#272727] z-50 flex justify-around items-center h-14">
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full text-xs transition
            ${location.pathname === item.path ? 'text-white' : 'text-[#717171] hover:text-white'}`}
        >
          <span className="text-xl">{item.emoji}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;