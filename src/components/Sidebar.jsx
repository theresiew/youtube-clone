import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col h-full bg-[#0f0f0f] overflow-y-auto pb-4">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.keyword)}
          className={`flex items-center gap-4 px-4 py-2.5 w-full text-left hover:bg-[#272727] transition rounded-xl mx-1
            ${selectedCategory === category.keyword
              ? 'bg-[#272727] text-white font-semibold'
              : 'text-[#aaaaaa]'
            }`}
        >
          <span className="text-xl">{category.icon}</span>
          <span className="text-sm">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;