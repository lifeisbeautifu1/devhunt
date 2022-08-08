import { Home } from './pages';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Home />} />
        <Route path="developers" element={<Home />} />
        <Route path="community" element={<Home />} />
        <Route path="blog" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
