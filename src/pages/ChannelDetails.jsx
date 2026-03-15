import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MdCheckCircle } from 'react-icons/md';
import { VideoCard, Loader } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('Videos');

  const { data: channelDetail, isLoading } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => fetchFromAPI(`channels?part=snippet,statistics&id=${id}`),
  });

  const { data: channelVideos } = useQuery({
    queryKey: ['channelVideos', id],
    queryFn: () => fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`),
  });

  const channel = channelDetail?.items[0];

  if (isLoading) return <div className="pt-14"><Loader /></div>;

  return (
    <div className="pt-14 min-h-screen">
      {/* Banner */}
      <div className="relative h-36 md:h-48 bg-gradient-to-r from-red-900 via-red-700 to-red-500">
        {channel?.brandingSettings?.image?.bannerExternalUrl && (
          <img
            src={channel?.brandingSettings?.image?.bannerExternalUrl}
            alt="banner"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Channel Info */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 mb-6">
          <img
            src={channel?.snippet?.thumbnails?.high?.url}
            alt={channel?.snippet?.title}
            className="w-24 h-24 rounded-full border-4 border-[#0f0f0f] object-cover"
          />
          <div className="text-center sm:text-left pb-2">
            <h1 className="text-white text-2xl font-bold flex items-center gap-2 justify-center sm:justify-start">
              {channel?.snippet?.title}
              <MdCheckCircle className="text-gray-400" />
            </h1>
            <p className="text-[#aaaaaa] text-sm mt-1">
              {parseInt(channel?.statistics?.subscriberCount || 0).toLocaleString()} subscribers
              {' · '}
              {parseInt(channel?.statistics?.videoCount || 0).toLocaleString()} videos
            </p>
            <p className="text-[#aaaaaa] text-sm mt-1 line-clamp-2 max-w-xl">
              {channel?.snippet?.description}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-[#272727] mb-6">
          {['Videos', 'About'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-3 text-sm font-medium transition border-b-2 ${
                selectedTab === tab
                  ? 'text-white border-white'
                  : 'text-[#aaaaaa] border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        {selectedTab === 'Videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-8">
            {channelVideos?.items?.filter(item => item.id.videoId).map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>
        )}

        {/* About Tab */}
        {selectedTab === 'About' && (
          <div className="max-w-2xl pb-8">
            <div className="bg-[#1a1a1a] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">Description</h3>
              <p className="text-[#aaaaaa] text-sm leading-relaxed">
                {channel?.snippet?.description || 'No description available.'}
              </p>
              <div className="mt-4 pt-4 border-t border-[#272727]">
                <p className="text-[#aaaaaa] text-sm">
                  <span className="text-white font-medium">Total Views: </span>
                  {parseInt(channel?.statistics?.viewCount || 0).toLocaleString()}
                </p>
                <p className="text-[#aaaaaa] text-sm mt-2">
                  <span className="text-white font-medium">Joined: </span>
                  {new Date(channel?.snippet?.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChannelDetails;