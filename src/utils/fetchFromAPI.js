import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: options.headers,
});

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await apiClient.get(`/${url}`, { params: options.params });
    return data;
  } catch (error) {
    console.warn('API failed, using mock data');
    return getMockData(url);
  }
};

const allMockVideos = {
  'New Videos': [
    { id: { videoId: 'dQw4w9WgXcQ' }, snippet: { title: 'Rick Astley - Never Gonna Give You Up', channelTitle: 'Rick Astley', channelId: 'UCuAXFkgsw1L7xaCfnd5JJOw', thumbnails: { high: { url: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg' } } } },
    { id: { videoId: 'bMknfKXIFA8' }, snippet: { title: 'JavaScript Tutorial for Beginners', channelTitle: 'Programming with Mosh', channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA', thumbnails: { high: { url: 'https://img.youtube.com/vi/bMknfKXIFA8/mqdefault.jpg' } } } },
    { id: { videoId: 'SqcY0GlETPk' }, snippet: { title: 'React Tutorial - Build a Complete App', channelTitle: 'Traversy Media', channelId: 'UC29ju8bIPH5as8OGnQzwJyA', thumbnails: { high: { url: 'https://img.youtube.com/vi/SqcY0GlETPk/mqdefault.jpg' } } } },
    { id: { videoId: 'w7ejDZ8SWv8' }, snippet: { title: 'React JS Crash Course', channelTitle: 'Traversy Media', channelId: 'UC29ju8bIPH5as8OGnQzwJyA', thumbnails: { high: { url: 'https://img.youtube.com/vi/w7ejDZ8SWv8/mqdefault.jpg' } } } },
    { id: { videoId: 'f2EqECiTBL8' }, snippet: { title: 'TypeScript Full Course for Beginners', channelTitle: 'JavaScript Mastery', channelId: 'UCmXmlB4-HJytD7wek0Uo97A', thumbnails: { high: { url: 'https://img.youtube.com/vi/f2EqECiTBL8/mqdefault.jpg' } } } },
    { id: { videoId: 'nu_pCVPKzTk' }, snippet: { title: 'Next.js 14 Full Course', channelTitle: 'JavaScript Mastery', channelId: 'UCmXmlB4-HJytD7wek0Uo97A', thumbnails: { high: { url: 'https://img.youtube.com/vi/nu_pCVPKzTk/mqdefault.jpg' } } } },
    { id: { videoId: 'RVFAyFWO4go' }, snippet: { title: 'Node.js and Express Full Course', channelTitle: 'freeCodeCamp', channelId: 'UC8butISFwT-Wl7EV0hUK0BQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/RVFAyFWO4go/mqdefault.jpg' } } } },
    { id: { videoId: 'Ke90Tje7VS0' }, snippet: { title: 'React & Redux Full Course', channelTitle: 'freeCodeCamp', channelId: 'UC8butISFwT-Wl7EV0hUK0BQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/Ke90Tje7VS0/mqdefault.jpg' } } } },
  ],
  'Trending': [
    { id: { videoId: 'kJQP7kiw5Fk' }, snippet: { title: 'Luis Fonsi - Despacito ft. Daddy Yankee', channelTitle: 'Luis Fonsi', channelId: 'UCxoq-2klCEz4OTFJYoQDpbg', thumbnails: { high: { url: 'https://img.youtube.com/vi/kJQP7kiw5Fk/mqdefault.jpg' } } } },
    { id: { videoId: 'JGwWNGJdvx8' }, snippet: { title: 'Ed Sheeran - Shape of You', channelTitle: 'Ed Sheeran', channelId: 'UC0C-w0YjGpqDXGB8IHb662A', thumbnails: { high: { url: 'https://img.youtube.com/vi/JGwWNGJdvx8/mqdefault.jpg' } } } },
    { id: { videoId: 'OPf0YbXqDm0' }, snippet: { title: 'Mark Ronson - Uptown Funk ft. Bruno Mars', channelTitle: 'Mark Ronson', channelId: 'UCFv1fqpCkYo8bgPlQn4xRkA', thumbnails: { high: { url: 'https://img.youtube.com/vi/OPf0YbXqDm0/mqdefault.jpg' } } } },
    { id: { videoId: 'hT_nvWreIhg' }, snippet: { title: 'OneRepublic - Counting Stars', channelTitle: 'OneRepublic', channelId: 'UCGDiCfPBHPt-3SxOhxyp_9Q', thumbnails: { high: { url: 'https://img.youtube.com/vi/hT_nvWreIhg/mqdefault.jpg' } } } },
    { id: { videoId: 'YqeW9_5kURI' }, snippet: { title: 'Justin Bieber - Baby ft. Ludacris', channelTitle: 'Justin Bieber', channelId: 'UCIwFjwMjI0y7PDBVEO9-bkQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/YqeW9_5kURI/mqdefault.jpg' } } } },
    { id: { videoId: 'fRh_vgS2dFE' }, snippet: { title: "Justin Timberlake - Can't Stop the Feeling", channelTitle: 'Justin Timberlake', channelId: 'UCaum3F61RWJtLlGHlFP3MQA', thumbnails: { high: { url: 'https://img.youtube.com/vi/fRh_vgS2dFE/mqdefault.jpg' } } } },
    { id: { videoId: 'RgKAFK5djSk' }, snippet: { title: 'Wiz Khalifa - See You Again ft. Charlie Puth', channelTitle: 'Wiz Khalifa', channelId: 'UCRI-Ds5eY70A3HZnpGrAWqg', thumbnails: { high: { url: 'https://img.youtube.com/vi/RgKAFK5djSk/mqdefault.jpg' } } } },
    { id: { videoId: 'lp-EO5I60KA' }, snippet: { title: 'Adele - Send My Love', channelTitle: 'Adele', channelId: 'UCsRM0YB_dabtEPGPTKo-gcw', thumbnails: { high: { url: 'https://img.youtube.com/vi/lp-EO5I60KA/mqdefault.jpg' } } } },
  ],
  'Coding': [
    { id: { videoId: 'SqcY0GlETPk' }, snippet: { title: 'React Tutorial - Build a Complete App', channelTitle: 'Traversy Media', channelId: 'UC29ju8bIPH5as8OGnQzwJyA', thumbnails: { high: { url: 'https://img.youtube.com/vi/SqcY0GlETPk/mqdefault.jpg' } } } },
    { id: { videoId: 'bMknfKXIFA8' }, snippet: { title: 'JavaScript Tutorial for Beginners', channelTitle: 'Programming with Mosh', channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA', thumbnails: { high: { url: 'https://img.youtube.com/vi/bMknfKXIFA8/mqdefault.jpg' } } } },
    { id: { videoId: 'f2EqECiTBL8' }, snippet: { title: 'TypeScript Full Course for Beginners', channelTitle: 'JavaScript Mastery', channelId: 'UCmXmlB4-HJytD7wek0Uo97A', thumbnails: { high: { url: 'https://img.youtube.com/vi/f2EqECiTBL8/mqdefault.jpg' } } } },
    { id: { videoId: 'fis26HvvDII' }, snippet: { title: 'Docker Tutorial for Beginners', channelTitle: 'TechWorld with Nana', channelId: 'UCdngmbVKX1Tgre699-XLlUA', thumbnails: { high: { url: 'https://img.youtube.com/vi/fis26HvvDII/mqdefault.jpg' } } } },
    { id: { videoId: 'mJ3bGvy0WAY' }, snippet: { title: 'Python for Beginners Full Course', channelTitle: 'Programming with Mosh', channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA', thumbnails: { high: { url: 'https://img.youtube.com/vi/mJ3bGvy0WAY/mqdefault.jpg' } } } },
    { id: { videoId: 'nu_pCVPKzTk' }, snippet: { title: 'Next.js 14 Full Course', channelTitle: 'JavaScript Mastery', channelId: 'UCmXmlB4-HJytD7wek0Uo97A', thumbnails: { high: { url: 'https://img.youtube.com/vi/nu_pCVPKzTk/mqdefault.jpg' } } } },
    { id: { videoId: 'RVFAyFWO4go' }, snippet: { title: 'Node.js and Express Full Course', channelTitle: 'freeCodeCamp', channelId: 'UC8butISFwT-Wl7EV0hUK0BQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/RVFAyFWO4go/mqdefault.jpg' } } } },
    { id: { videoId: 'hQAHSlTtcmY' }, snippet: { title: 'CSS Full Course - Flexbox and Grid', channelTitle: 'freeCodeCamp', channelId: 'UC8butISFwT-Wl7EV0hUK0BQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/hQAHSlTtcmY/mqdefault.jpg' } } } },
  ],
  'Music': [
    { id: { videoId: 'kJQP7kiw5Fk' }, snippet: { title: 'Luis Fonsi - Despacito', channelTitle: 'Luis Fonsi', channelId: 'UCxoq-2klCEz4OTFJYoQDpbg', thumbnails: { high: { url: 'https://img.youtube.com/vi/kJQP7kiw5Fk/mqdefault.jpg' } } } },
    { id: { videoId: 'JGwWNGJdvx8' }, snippet: { title: 'Ed Sheeran - Shape of You', channelTitle: 'Ed Sheeran', channelId: 'UC0C-w0YjGpqDXGB8IHb662A', thumbnails: { high: { url: 'https://img.youtube.com/vi/JGwWNGJdvx8/mqdefault.jpg' } } } },
    { id: { videoId: 'OPf0YbXqDm0' }, snippet: { title: 'Mark Ronson - Uptown Funk', channelTitle: 'Mark Ronson', channelId: 'UCFv1fqpCkYo8bgPlQn4xRkA', thumbnails: { high: { url: 'https://img.youtube.com/vi/OPf0YbXqDm0/mqdefault.jpg' } } } },
    { id: { videoId: 'RgKAFK5djSk' }, snippet: { title: 'Wiz Khalifa - See You Again', channelTitle: 'Wiz Khalifa', channelId: 'UCRI-Ds5eY70A3HZnpGrAWqg', thumbnails: { high: { url: 'https://img.youtube.com/vi/RgKAFK5djSk/mqdefault.jpg' } } } },
    { id: { videoId: 'hT_nvWreIhg' }, snippet: { title: 'OneRepublic - Counting Stars', channelTitle: 'OneRepublic', channelId: 'UCGDiCfPBHPt-3SxOhxyp_9Q', thumbnails: { high: { url: 'https://img.youtube.com/vi/hT_nvWreIhg/mqdefault.jpg' } } } },
    { id: { videoId: 'fRh_vgS2dFE' }, snippet: { title: "Justin Timberlake - Can't Stop the Feeling", channelTitle: 'Justin Timberlake', channelId: 'UCaum3F61RWJtLlGHlFP3MQA', thumbnails: { high: { url: 'https://img.youtube.com/vi/fRh_vgS2dFE/mqdefault.jpg' } } } },
    { id: { videoId: 'YqeW9_5kURI' }, snippet: { title: 'Justin Bieber - Baby', channelTitle: 'Justin Bieber', channelId: 'UCIwFjwMjI0y7PDBVEO9-bkQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/YqeW9_5kURI/mqdefault.jpg' } } } },
    { id: { videoId: 'lp-EO5I60KA' }, snippet: { title: 'Adele - Send My Love', channelTitle: 'Adele', channelId: 'UCsRM0YB_dabtEPGPTKo-gcw', thumbnails: { high: { url: 'https://img.youtube.com/vi/lp-EO5I60KA/mqdefault.jpg' } } } },
  ],
  'Gaming': [
    { id: { videoId: 'mFuHakom2Y4' }, snippet: { title: 'Minecraft Survival Guide 2024', channelTitle: 'Pixlriffs', channelId: 'UCgGjBqZZtAjKfIMFjUWFDiA', thumbnails: { high: { url: 'https://img.youtube.com/vi/mFuHakom2Y4/mqdefault.jpg' } } } },
    { id: { videoId: 'rZEygKm4bFo' }, snippet: { title: 'GTA 5 - Best Moments Compilation', channelTitle: 'GameClips', channelId: 'UC1234gaming', thumbnails: { high: { url: 'https://img.youtube.com/vi/rZEygKm4bFo/mqdefault.jpg' } } } },
    { id: { videoId: '9bZkp7q19f0' }, snippet: { title: 'PSY - GANGNAM STYLE Gaming Parody', channelTitle: 'GameFun', channelId: 'UC5678gaming', thumbnails: { high: { url: 'https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg' } } } },
    { id: { videoId: 'M7lc1UVf-VE' }, snippet: { title: 'Fortnite Season 2024 - Best Plays', channelTitle: 'FortnitePro', channelId: 'UC9012gaming', thumbnails: { high: { url: 'https://img.youtube.com/vi/M7lc1UVf-VE/mqdefault.jpg' } } } },
    { id: { videoId: 'kffacxfA7G4' }, snippet: { title: 'Baby Shark - Gaming Edition', channelTitle: 'PinkFong Games', channelId: 'UC3456gaming', thumbnails: { high: { url: 'https://img.youtube.com/vi/kffacxfA7G4/mqdefault.jpg' } } } },
    { id: { videoId: 'e-ORhEE9VVg' }, snippet: { title: 'Top 10 Gaming Moments of 2024', channelTitle: 'GamersWorld', channelId: 'UCgaming2024', thumbnails: { high: { url: 'https://img.youtube.com/vi/e-ORhEE9VVg/mqdefault.jpg' } } } },
    { id: { videoId: 'lWA2pjMjpBs' }, snippet: { title: "Minecraft Let's Play - Episode 1", channelTitle: 'MinecraftPro', channelId: 'UCminecraft123', thumbnails: { high: { url: 'https://img.youtube.com/vi/lWA2pjMjpBs/mqdefault.jpg' } } } },
    { id: { videoId: 'CevxZvSJLk8' }, snippet: { title: 'Katy Perry - Roar Gaming Montage', channelTitle: 'GameHighlights', channelId: 'UC7890gaming', thumbnails: { high: { url: 'https://img.youtube.com/vi/CevxZvSJLk8/mqdefault.jpg' } } } },
  ],
  'Movies': [
    { id: { videoId: 'EXeTwQWrcwY' }, snippet: { title: 'The Dark Knight - Official Trailer', channelTitle: 'Warner Bros', channelId: 'UCjmJDM5pRKbUQt_BkUrq-EQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/EXeTwQWrcwY/mqdefault.jpg' } } } },
    { id: { videoId: 'JfVOs4VSpmA' }, snippet: { title: 'Spider-Man No Way Home - Trailer', channelTitle: 'Sony Pictures', channelId: 'UCbmNph6atAoGfqLoCL_duAg', thumbnails: { high: { url: 'https://img.youtube.com/vi/JfVOs4VSpmA/mqdefault.jpg' } } } },
    { id: { videoId: 'TcMBFSGVi1c' }, snippet: { title: 'Avengers Endgame - Official Trailer', channelTitle: 'Marvel Entertainment', channelId: 'UCvC4D8onUfXzvjTOM-dBfEA', thumbnails: { high: { url: 'https://img.youtube.com/vi/TcMBFSGVi1c/mqdefault.jpg' } } } },
    { id: { videoId: 'hA6hldpSTF8' }, snippet: { title: 'Interstellar - Official Trailer', channelTitle: 'Warner Bros', channelId: 'UCjmJDM5pRKbUQt_BkUrq-EQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/hA6hldpSTF8/mqdefault.jpg' } } } },
    { id: { videoId: 'sGbxmsDFVnE' }, snippet: { title: 'Inception - Official Trailer', channelTitle: 'Warner Bros', channelId: 'UCjmJDM5pRKbUQt_BkUrq-EQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/sGbxmsDFVnE/mqdefault.jpg' } } } },
    { id: { videoId: 'YoHD9XEInc0' }, snippet: { title: 'Avatar - Official Trailer', channelTitle: '20th Century Studios', channelId: 'UC20thCentury', thumbnails: { high: { url: 'https://img.youtube.com/vi/YoHD9XEInc0/mqdefault.jpg' } } } },
    { id: { videoId: 'nnsSUqgkDwU' }, snippet: { title: 'Joker - Official Trailer', channelTitle: 'Warner Bros', channelId: 'UCjmJDM5pRKbUQt_BkUrq-EQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/nnsSUqgkDwU/mqdefault.jpg' } } } },
    { id: { videoId: 'ByXuk9QqQkk' }, snippet: { title: 'The Matrix - Official Trailer', channelTitle: 'Warner Bros', channelId: 'UCjmJDM5pRKbUQt_BkUrq-EQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/ByXuk9QqQkk/mqdefault.jpg' } } } },
  ],
  'Live': [
    { id: { videoId: 'jfKfPfyJRdk' }, snippet: { title: 'lofi hip hop radio - beats to relax/study to', channelTitle: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', thumbnails: { high: { url: 'https://img.youtube.com/vi/jfKfPfyJRdk/mqdefault.jpg' } } } },
    { id: { videoId: '5qap5aO4i9A' }, snippet: { title: 'lofi hip hop radio - beats to sleep/chill to', channelTitle: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', thumbnails: { high: { url: 'https://img.youtube.com/vi/5qap5aO4i9A/mqdefault.jpg' } } } },
    { id: { videoId: 'rUxyKA_-grg' }, snippet: { title: 'NASA Live - Earth From Space', channelTitle: 'NASA', channelId: 'UCLA_DiR1FfKNvjuUpBHmylQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/rUxyKA_-grg/mqdefault.jpg' } } } },
    { id: { videoId: 'XqZsoesa55w' }, snippet: { title: 'Baby Shark Dance - Live Stream', channelTitle: 'Pinkfong', channelId: 'UCcdwLMPsaU2ezNSJU1nFoBQ', thumbnails: { high: { url: 'https://img.youtube.com/vi/XqZsoesa55w/mqdefault.jpg' } } } },
    { id: { videoId: 'DWcJFNfaw9c' }, snippet: { title: 'Nature Sounds Live - Forest Stream', channelTitle: 'Nature Relaxation', channelId: 'UCNatureRelax', thumbnails: { high: { url: 'https://img.youtube.com/vi/DWcJFNfaw9c/mqdefault.jpg' } } } },
    { id: { videoId: 'n_Dv4JMiwK8' }, snippet: { title: 'Peaceful Piano Live - Study Music', channelTitle: 'PianoRelax', channelId: 'UCPianoRelax', thumbnails: { high: { url: 'https://img.youtube.com/vi/n_Dv4JMiwK8/mqdefault.jpg' } } } },
  ],
  'News': [
    { id: { videoId: 'GCzWBStBFqg' }, snippet: { title: 'World News Today - Top Stories 2024', channelTitle: 'BBC News', channelId: 'UC16niRr50-MSBwiO3YDb3RA', thumbnails: { high: { url: 'https://img.youtube.com/vi/GCzWBStBFqg/mqdefault.jpg' } } } },
    { id: { videoId: 'fLeJJPxua3E' }, snippet: { title: 'Breaking News - CNN Live Coverage', channelTitle: 'CNN', channelId: 'UCupvZG-5ko_eiXAupbDfxWw', thumbnails: { high: { url: 'https://img.youtube.com/vi/fLeJJPxua3E/mqdefault.jpg' } } } },
    { id: { videoId: 'oJLqyuxm96k' }, snippet: { title: 'Tech News Weekly - Latest Updates', channelTitle: 'TechCrunch', channelId: 'UCCjyq_K1Xwfg8Lndy7lKMpA', thumbnails: { high: { url: 'https://img.youtube.com/vi/oJLqyuxm96k/mqdefault.jpg' } } } },
    { id: { videoId: 'nfWlot6h_JM' }, snippet: { title: 'Climate Change News - 2024 Update', channelTitle: 'DW News', channelId: 'UCknLrEdhRCp1aegoMqRaCZg', thumbnails: { high: { url: 'https://img.youtube.com/vi/nfWlot6h_JM/mqdefault.jpg' } } } },
    { id: { videoId: 'YddwkMJG1Jo' }, snippet: { title: 'Financial News - Market Update', channelTitle: 'Bloomberg', channelId: 'UCIALMKvObZNtJ6AmdCLP7Lg', thumbnails: { high: { url: 'https://img.youtube.com/vi/YddwkMJG1Jo/mqdefault.jpg' } } } },
  ],
  'World': [
    { id: { videoId: 'qeMFqkcPYcg' }, snippet: { title: 'Most Beautiful Places on Earth', channelTitle: 'National Geographic', channelId: 'UCpVm7bg6pXKo1Pr6k5kxG9A', thumbnails: { high: { url: 'https://img.youtube.com/vi/qeMFqkcPYcg/mqdefault.jpg' } } } },
    { id: { videoId: 'iDbyYGrswtg' }, snippet: { title: 'Amazing Street Food Around The World', channelTitle: 'Mark Wiens', channelId: 'UCnTsUMBOA8E3-p0R8OriEdA', thumbnails: { high: { url: 'https://img.youtube.com/vi/iDbyYGrswtg/mqdefault.jpg' } } } },
    { id: { videoId: 'ScMzIvxBSi4' }, snippet: { title: 'Earth From Above - Aerial Documentary', channelTitle: 'National Geographic', channelId: 'UCpVm7bg6pXKo1Pr6k5kxG9A', thumbnails: { high: { url: 'https://img.youtube.com/vi/ScMzIvxBSi4/mqdefault.jpg' } } } },
    { id: { videoId: 'LXb3EKWsInQ' }, snippet: { title: 'Planet Earth III - Official Trailer', channelTitle: 'BBC Earth', channelId: 'UCwmZiChSryoWQCZMIQezgTg', thumbnails: { high: { url: 'https://img.youtube.com/vi/LXb3EKWsInQ/mqdefault.jpg' } } } },
    { id: { videoId: '2oiSCjRGNaY' }, snippet: { title: 'World Culture Documentary 2024', channelTitle: 'DW Documentary', channelId: 'UCW39zufHfsuGgpLviKh297Q', thumbnails: { high: { url: 'https://img.youtube.com/vi/2oiSCjRGNaY/mqdefault.jpg' } } } },
    { id: { videoId: 'G7RgN9ijwE4' }, snippet: { title: 'Top 10 Countries to Visit in 2024', channelTitle: 'Travel Insider', channelId: 'UCTravelInsider', thumbnails: { high: { url: 'https://img.youtube.com/vi/G7RgN9ijwE4/mqdefault.jpg' } } } },
  ],
};

const mockChannelDetails = {
  items: [{
    id: 'UCmXmlB4-HJytD7wek0Uo97A',
    snippet: {
      title: 'JavaScript Mastery',
      description: 'Master JavaScript and modern web development with practical projects and tutorials.',
      thumbnails: { high: { url: 'https://yt3.googleusercontent.com/ytc/AIdro_nxlBFt4tQQaWTzFRFM9k1lPc4DKhpSVCrGJWJX=s176-c-k-c0x00ffffff-no-rj' } },
      publishedAt: '2019-01-01T00:00:00Z',
    },
    statistics: { subscriberCount: '1850000', videoCount: '120', viewCount: '120000000' },
  }],
};

const getMockData = (url) => {
  if (url.includes('channels')) return mockChannelDetails;

  if (url.includes('videos')) {
    const idMatch = url.match(/id=([^&]+)/);
    const videoId = idMatch ? idMatch[1] : 'dQw4w9WgXcQ';
    const allVideos = Object.values(allMockVideos).flat();
    const found = allVideos.find(v => v.id.videoId === videoId);
    return {
      items: [{
        id: videoId,
        snippet: {
          title: found?.snippet?.title || 'Video Title',
          channelTitle: found?.snippet?.channelTitle || 'Channel',
          channelId: found?.snippet?.channelId || 'UC123',
          description: `Watch "${found?.snippet?.title || 'this video'}" by ${found?.snippet?.channelTitle || 'this creator'}. An amazing video you will enjoy watching!`,
          thumbnails: found?.snippet?.thumbnails || { high: { url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` } },
          publishedAt: '2024-01-01T00:00:00Z',
        },
        statistics: {
          viewCount: String(Math.floor(Math.random() * 50000000) + 1000000),
          likeCount: String(Math.floor(Math.random() * 500000) + 10000),
          commentCount: String(Math.floor(Math.random() * 50000) + 1000),
        },
      }],
    };
  }

  const searchMatch = url.match(/q=([^&]+)/);
  if (searchMatch) {
    const query = decodeURIComponent(searchMatch[1]);
    const categoryKey = Object.keys(allMockVideos).find(
      key => key.toLowerCase() === query.toLowerCase()
    );
    if (categoryKey) return { items: allMockVideos[categoryKey] };
    const allVideos = Object.values(allMockVideos).flat();
    const filtered = allVideos.filter(v =>
      v.snippet.title.toLowerCase().includes(query.toLowerCase()) ||
      v.snippet.channelTitle.toLowerCase().includes(query.toLowerCase())
    );
    return { items: filtered.length > 0 ? filtered : allVideos.slice(0, 8) };
  }

  return { items: allMockVideos['New Videos'] };
};