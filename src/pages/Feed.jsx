import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Sidebar, VideoCard, Loader } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const filterPills = ['All', 'Music', 'Gaming', 'Live', 'Coding', 'News', 'Movies', 'Trending', 'World', 'Sports', 'Comedy', 'Education'];

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New Videos');
  const [activePill, setActivePill] = useState('All');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed', selectedCategory],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=20&type=video`),
  });

  const handlePill = (pill) => {
    setActivePill(pill);
    setSelectedCategory(pill === 'All' ? 'New Videos' : pill);
  };

  return (
    <div className="flex min-h-screen" style={{ background: '#0a0a0a', paddingTop: '56px' }}>

      <div className="hidden md:block fixed left-0 bottom-0 w-56 overflow-y-auto z-40"
        style={{ top: '56px', borderRight: '1px solid #1a1a1a', background: '#0a0a0a' }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => { setSelectedCategory(cat); setActivePill('All'); }}
        />
      </div>

      <div className="flex-1 min-w-0 pb-20 md:pb-8" style={{ marginLeft: '224px' }}>

        <div className="sticky z-30 px-6 py-3"
          style={{ top: '56px', background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1a1a1a' }}>
          <div className="flex gap-2 overflow-x-auto pill-scroll">
            {filterPills.map((pill) => (
              <button
                key={pill}
                onClick={() => handlePill(pill)}
                className="flex-shrink-0 px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
                style={{
                  background: activePill === pill ? '#e8e8e8' : '#161616',
                  color: activePill === pill ? '#0a0a0a' : '#888',
                  border: activePill === pill ? 'none' : '1px solid #222',
                }}>
                {pill}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pt-6">
          <div className="flex items-baseline gap-2 mb-5">
            <h2 className="text-sm font-semibold" style={{ color: '#e8e8e8' }}>
              {selectedCategory === 'New Videos' ? 'Latest' : selectedCategory}
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-md" style={{ background: '#ff444418', color: '#ff6666' }}>
              Videos
            </span>
          </div>

          {isLoading && <Loader />}

          {isError && (
            <div className="flex items-center justify-center h-64">
              <p className="text-sm" style={{ color: '#ff6666' }}>Something went wrong. Please try again.</p>
            </div>
          )}

          {!isLoading && !isError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
              {data?.items?.filter(item => item.id?.videoId).map((video, idx) => (
                <VideoCard key={idx} video={video} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-14"
        style={{ background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(12px)', borderTop: '1px solid #1a1a1a' }}>
        {[
          { label: 'Home', keyword: 'New Videos', icon: '⊞' },
          { label: 'Trending', keyword: 'Trending', icon: '↑' },
          { label: 'Coding', keyword: 'Coding', icon: '</>' },
          { label: 'Music', keyword: 'Music', icon: '♪' },
          { label: 'Gaming', keyword: 'Gaming', icon: '◈' },
        ].map((item) => (
          <button key={item.label}
            onClick={() => { setSelectedCategory(item.keyword); setActivePill('All'); }}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-xs transition-all"
            style={{ color: selectedCategory === item.keyword ? '#ff4444' : '#555' }}>
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Feed;