import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-3 md:px-4 h-14 bg-[#0f0f0f] border-b border-[#272727]">

 
      <div className="flex items-center gap-3 min-w-fit">
        <button className="p-2 rounded-full hover:bg-[#272727] transition hidden md:block">
          <HiMenuAlt1 className="text-white text-xl" />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 90 63" fill="none">
            <path d="M88 9.8A11.3 11.3 0 0 0 80.2 2C73.2 0 45 0 45 0S16.8 0 9.8 2A11.3 11.3 0 0 0 2 9.8C0 16.8 0 31.5 0 31.5s0 14.7 2 21.7A11.3 11.3 0 0 0 9.8 61c7 2 35.2 2 35.2 2s28.2 0 35.2-2A11.3 11.3 0 0 0 88 53.2C90 46.2 90 31.5 90 31.5s0-14.7-2-21.7z" fill="#FF0000"/>
            <path d="M36 45l23.3-13.5L36 18v27z" fill="white"/>
          </svg>
          <span className="text-white font-bold text-base md:text-lg hidden sm:block">YouTube</span>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="flex items-center w-full max-w-xs sm:max-w-md md:max-w-xl mx-2 md:mx-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full bg-[#121212] border border-[#303030] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-l-full outline-none focus:border-blue-500 text-sm"
        />
        <button
          type="submit"
          className="bg-[#272727] border border-[#303030] border-l-0 px-3 md:px-5 py-1.5 md:py-2 rounded-r-full hover:bg-[#3f3f3f] transition"
        >
          <AiOutlineSearch className="text-white text-lg md:text-xl" />
        </button>
      </form>

      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm min-w-fit cursor-pointer hover:opacity-90 transition">
        U
      </div>

    </nav>
  );
};

export default Navbar;