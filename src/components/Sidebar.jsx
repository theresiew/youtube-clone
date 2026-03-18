import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className="flex flex-col h-full overflow-y-auto"
      style={{ background: '#0a0a0a', paddingTop: '12px', paddingBottom: '24px' }}>
      {categories.map((category) => {
        const isActive = selectedCategory === category.keyword;
        return (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.keyword)}
            className="flex items-center gap-3 text-left transition-all duration-150 rounded-lg"
            style={{
              margin: '1px 6px',
              padding: '9px 14px',
              background: isActive ? '#1c1c1c' : 'transparent',
              color: isActive ? '#fff' : '#666',
              width: 'calc(100% - 12px)',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.background = '#141414';
                e.currentTarget.style.color = '#bbb';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#666';
              }
            }}>
            <span style={{ fontSize: '16px', color: isActive ? '#ff4444' : 'inherit', flexShrink: 0 }}>
              {category.icon}
            </span>
            <span style={{ fontSize: '13px', fontWeight: isActive ? '500' : '400' }}>
              {category.name}
            </span>
            {isActive && (
              <span
                className="ml-auto rounded-full flex-shrink-0"
                style={{ width: '3px', height: '16px', background: '#ff4444' }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;