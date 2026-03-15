import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Sidebar, VideoCard, Loader } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { categories } from '../utils/constants';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New Videos');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['feed', selectedCategory],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${selectedCategory}`),
  });

  return (
    <div className="flex pt-14 min-h-screen bg-[#0f0f0f]">

      {/* Sidebar - desktop only */}
      <div className="hidden md:block fixed top-14 left-0 bottom-0 w-56 border-r border-[#272727] overflow-y-auto z-40 bg-[#0f0f0f]">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-56 p-3 md:p-5 pb-20 md:pb-5">
        <h2 className="text-white text-lg md:text-xl font-bold mb-5 capitalize">
          {selectedCategory} <span className="text-red-600">Videos</span>
        </h2>

        {isLoading && <Loader />}

        {isError && (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-500 text-lg">Something went wrong. Please try again later.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {data?.items?.filter(item => item.id.videoId).map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-[#272727] z-50 flex justify-around items-center py-2 px-1">
        {categories.slice(0, 5).map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.keyword)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs transition min-w-0
              ${selectedCategory === cat.keyword ? 'text-white' : 'text-[#aaaaaa]'}`}
          >
            <span className={`text-2xl transition ${selectedCategory === cat.keyword ? 'text-white' : 'text-[#aaaaaa]'}`}>
              {cat.icon}
            </span>
            <span className="text-[10px] truncate w-full text-center">{cat.name}</span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default Feed;