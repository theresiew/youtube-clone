import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MdCheckCircle, MdThumbUp, MdThumbDown, MdShare, MdMoreHoriz } from 'react-icons/md';
import { Loader } from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetails = () => {
  const { id } = useParams();
  const [showFullDesc, setShowFullDesc] = useState(false);

  const { data: videoDetail, isLoading, isError } = useQuery({
    queryKey: ['video', id],
    queryFn: () => fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
  });

  const { data: relatedVideos } = useQuery({
    queryKey: ['related', id],
    queryFn: () => fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=15`),
  });

  const video = videoDetail?.items?.[0];
  const snippet = video?.snippet;
  const statistics = video?.statistics;

  const { data: channelData } = useQuery({
    queryKey: ['channelStats', snippet?.channelId],
    queryFn: () => fetchFromAPI(`channels?part=statistics&id=${snippet?.channelId}`),
    enabled: !!snippet?.channelId,
  });

  const subscriberCount = channelData?.items?.[0]?.statistics?.subscriberCount;

  if (isLoading) return (
    <div className="pt-14 bg-[#0f0f0f] min-h-screen flex items-center justify-center">
      <Loader />
    </div>
  );

  if (isError) return (
    <div className="pt-14 bg-[#0f0f0f] min-h-screen flex items-center justify-center">
      <p className="text-red-500 text-lg">Something went wrong. Please try again later.</p>
    </div>
  );

  return (
    <div className="pt-14 min-h-screen bg-[#0f0f0f] pb-14 md:pb-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto">

        {/* Left Column */}
        <div className="flex-1 min-w-0 p-3 lg:p-6">

          {/* Player */}
          <div className="w-full bg-black rounded-xl overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white font-bold text-base md:text-lg mt-3 leading-snug px-1">
            {snippet?.title || 'Video Title'}
          </h1>

          {/* Channel Row + Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 px-1">
            <Link to={`/channel/${snippet?.channelId}`} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {snippet?.channelTitle?.charAt(0) || 'Y'}
              </div>
              <div>
                <p className="text-white font-semibold flex items-center gap-1 text-sm">
                  {snippet?.channelTitle || 'Channel'}
                  <MdCheckCircle className="text-gray-400 text-xs" />
                </p>
                {subscriberCount && (
                  <p className="text-[#aaaaaa] text-xs">
                    {parseInt(subscriberCount).toLocaleString()} subscribers
                  </p>
                )}
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className="ml-3 bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-[#272727] rounded-full overflow-hidden">
                <button className="flex items-center gap-1.5 px-4 py-2 hover:bg-[#3f3f3f] transition border-r border-[#3f3f3f]">
                  <MdThumbUp className="text-white text-lg" />
                  <span className="text-white text-sm font-medium">
                    {parseInt(statistics?.likeCount || 0).toLocaleString()}
                  </span>
                </button>
                <button className="flex items-center px-4 py-2 hover:bg-[#3f3f3f] transition">
                  <MdThumbDown className="text-white text-lg" />
                </button>
              </div>
              <button className="flex items-center gap-1.5 bg-[#272727] px-4 py-2 rounded-full hover:bg-[#3f3f3f] transition">
                <MdShare className="text-white text-lg" />
                <span className="text-white text-sm">Share</span>
              </button>
              <button className="flex items-center bg-[#272727] p-2 rounded-full hover:bg-[#3f3f3f] transition">
                <MdMoreHoriz className="text-white text-lg" />
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div
            className="mt-3 bg-[#1a1a1a] hover:bg-[#222222] rounded-xl p-3 md:p-4 cursor-pointer transition mx-1"
            onClick={() => setShowFullDesc(!showFullDesc)}
          >
            <div className="flex gap-2 text-white text-sm font-semibold mb-1 flex-wrap">
              <span>{parseInt(statistics?.viewCount || 0).toLocaleString()} views</span>
              <span>•</span>
              <span>
                {snippet?.publishedAt
                  ? new Date(snippet.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })
                  : ''}
              </span>
            </div>
            <p className={`text-[#aaaaaa] text-sm leading-relaxed ${showFullDesc ? '' : 'line-clamp-2'}`}>
              {snippet?.description || 'No description available.'}
            </p>
            <p className="text-white text-xs font-bold mt-2">
              {showFullDesc ? 'Show less' : 'Show more'}
            </p>
          </div>
        </div>

        {/* Right Column - Related Videos */}
        <div className="w-full lg:w-[400px] xl:w-[420px] flex-shrink-0 px-3 lg:px-4 lg:pt-6 pb-6">
          <div className="flex flex-col gap-2">
            {relatedVideos?.items
              ?.filter((item) => item.id?.videoId)
              .map((video, idx) => (
                <Link
                  key={idx}
                  to={`/video/${video.id.videoId}`}
                  className="flex gap-2 group hover:bg-[#1a1a1a] rounded-xl p-1 transition"
                >
                  <div className="flex-shrink-0 w-40 h-[90px] rounded-lg overflow-hidden bg-[#272727]">
                    <img
                      src={`https://img.youtube.com/vi/${video.id.videoId}/mqdefault.jpg`}
                      alt={video.snippet?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://picsum.photos/seed/${video.id.videoId}/320/180`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <p className="text-white text-xs font-semibold line-clamp-2 leading-snug group-hover:text-gray-300 transition">
                      {video.snippet?.title}
                    </p>
                    <p className="text-[#aaaaaa] text-xs mt-1">{video.snippet?.channelTitle}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoDetails;