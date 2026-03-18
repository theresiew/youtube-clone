import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-5"
      style={{
        height: '56px',
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a1a',
      }}>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <svg width="26" height="18" viewBox="0 0 90 63" fill="none">
          <path d="M88 9.8A11.3 11.3 0 0 0 80.2 2C73.2 0 45 0 45 0S16.8 0 9.8 2A11.3 11.3 0 0 0 2 9.8C0 16.8 0 31.5 0 31.5s0 14.7 2 21.7A11.3 11.3 0 0 0 9.8 61c7 2 35.2 2 35.2 2s28.2 0 35.2-2A11.3 11.3 0 0 0 88 53.2C90 46.2 90 31.5 90 31.5s0-14.7-2-21.7z" fill="#FF0000"/>
          <path d="M36 45l23.3-13.5L36 18v27z" fill="white"/>
        </svg>
        <span className="font-semibold text-sm tracking-tight hidden sm:block" style={{ color: '#f0f0f0' }}>
          YouTube
        </span>
      </Link>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex-1 mx-6" style={{ maxWidth: '540px' }}>
        <div
          className="flex w-full rounded-full overflow-hidden"
          style={{
            border: focused ? '1px solid #444' : '1px solid #1e1e1e',
            background: '#0f0f0f',
            transition: 'border-color 0.2s',
          }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search"
            className="w-full bg-transparent text-white px-4 py-2 text-sm outline-none"
            style={{ caretColor: '#ff4444' }}
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 flex-shrink-0"
            style={{ background: '#161616', borderLeft: '1px solid #1e1e1e' }}>
            <AiOutlineSearch style={{ color: '#888', fontSize: '18px' }} />
          </button>
        </div>
      </form>

      {/* Avatar */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #e52d27, #b31217)' }}>
        U
      </div>
    </nav>
  );
};

export default Navbar;