import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { VideoCard, ChannelCard, Loader } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: () => fetchFromAPI(`search?part=snippet&q=${searchTerm}`),
  });

  return (
    <div className="pt-14 min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-white text-xl font-semibold mb-6">
          Search results for: <span className="text-red-600">{searchTerm}</span>
        </h2>

        {isLoading && <Loader />}

        {isError && (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-500 text-lg">Something went wrong. Please try again later.</p>
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.items?.map((item, idx) => (
              <div key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFeed;