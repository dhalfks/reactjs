import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/insert" element={<BoardInsert />} />
        <Route path="/boards/detail/:no" element={<BoardDetail />} />
        <Route path="/boards/edit/:no" element={<BoardEdit />} />
      </Routes>
    </Router>
  );
}

export default App;