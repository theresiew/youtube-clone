import { Link } from 'react-router-dom';
import { MdCheckCircle } from 'react-icons/md';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#1a1a1a] border border-[#272727] rounded-xl p-6 hover:bg-[#272727] transition ${marginTop}`}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}>
        <div className="flex flex-col items-center gap-3">
         
          <img
            src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            className="w-24 h-24 rounded-full object-cover border-2 border-[#3f3f3f]"
          />

          <div className="text-center">
            <h3 className="text-white font-semibold flex items-center gap-1 justify-center">
              {channelDetail?.snippet?.title}
              <MdCheckCircle className="text-gray-400 text-sm" />
            </h3>

            {channelDetail?.statistics?.subscriberCount && (
              <p className="text-[#aaaaaa] text-xs mt-1">
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;