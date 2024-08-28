import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import NotFound from './NotFound';

// Lazy loading components
const LazyComponent = lazy(() => import('./LazyComponent'));
const UserProfile = lazy(() => import('./UserProfile'));

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/lazy">Lazy Loaded Component</Link></li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<User />}>
          <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/lazy" element={<LazyComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;