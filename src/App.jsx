import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, MobileNav } from './components';
import Feed from './pages/Feed';
import VideoDetails from './pages/VideoDetails';
import ChannelDetails from './pages/ChannelDetails';
import SearchFeed from './pages/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;