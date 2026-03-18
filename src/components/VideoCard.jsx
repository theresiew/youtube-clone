import { Link } from 'react-router-dom';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video }) => {
  if (!video?.id) return null;
  const { id: { videoId }, snippet } = video;
  if (!videoId) return null;

  const thumbnailUrl = snippet?.thumbnails?.high?.url || `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  const colors = ['#c0392b','#8e44ad','#2980b9','#16a085','#d35400','#27ae60'];
  const avatarColor = colors[(snippet?.channelTitle?.charCodeAt(0) || 0) % colors.length];

  return (
    <div className="video-card flex flex-col gap-3 cursor-pointer fade-up">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="relative overflow-hidden rounded-xl" style={{ background: '#151515' }}>
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src={thumbnailUrl}
              alt={snippet?.title}
              className="video-card-thumb w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; }}
            />
          </div>
        </div>
      </Link>

      <div className="flex gap-3 px-0.5">
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl} className="flex-shrink-0 mt-0.5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
            style={{ background: avatarColor }}>
            {snippet?.channelTitle?.charAt(0)?.toUpperCase() || 'Y'}
          </div>
        </Link>
        <div className="flex flex-col flex-1 min-w-0">
          <Link to={`/video/${videoId}`}>
            <h3 className="text-sm font-medium leading-snug line-clamp-2"
              style={{ color: '#e0e0e0' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#e0e0e0'}>
              {snippet?.title || demoVideoTitle}
            </h3>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
            <p className="text-xs mt-1" style={{ color: '#666' }}
              onMouseEnter={e => e.currentTarget.style.color = '#999'}
              onMouseLeave={e => e.currentTarget.style.color = '#666'}>
              {snippet?.channelTitle || demoChannelTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;