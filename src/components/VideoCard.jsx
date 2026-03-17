import { Link } from 'react-router-dom';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video }) => {
  if (!video?.id) return null;

  const { id: { videoId }, snippet } = video;

  if (!videoId) return null;

  const thumbnailUrl =
    snippet?.thumbnails?.high?.url ||
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative overflow-hidden rounded-xl bg-[#272727]">
          <img
            src={thumbnailUrl}
            alt={snippet?.title}
            className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://picsum.photos/seed/${videoId}/480/270`;
            }}
          />
        </div>
      </Link>

      <div className="flex gap-3 px-1">
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
            {snippet?.channelTitle?.charAt(0) || 'Y'}
          </div>
        </Link>

        <div className="flex flex-col flex-1 min-w-0">
          <Link to={`/video/${videoId}`}>
            <h3 className="text-white text-sm font-medium leading-snug line-clamp-2 hover:text-gray-300 transition">
              {snippet?.title || demoVideoTitle}
            </h3>
          </Link>

          <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
            <p className="text-[#aaaaaa] text-xs mt-1 hover:text-white transition">
              {snippet?.channelTitle || demoChannelTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;