import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const BoardPage = lazy(() => import('./pages/BoardPage'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/board/:id" element={<BoardPage />} />
                    <Route path="/board/new" element={<BoardPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;