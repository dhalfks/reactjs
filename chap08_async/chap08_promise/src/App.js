import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardDetail from './components/BoardDetail';
import BoardEdit from './components/BoardEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board-list" element={<BoardList />} />
        <Route path="/board-insert" element={<BoardInsert />} />
        <Route path="/board-detail/:no" element={<BoardDetail />} />
        <Route path="/board-edit/:no" element={<BoardEdit />} />
      </Routes>
    </Router>
  );
};

export default App;