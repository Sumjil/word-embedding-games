import './App.css';
import Header from './components/header';
import NotesListPage from './pages/NotesListPage';
import GameListPage from './pages/GameListPage'
import GamePage from './pages/GamePage'
import QuizPage from './components/QuizPage'
import ContextPage from './components/ContextPage'
import Point2Page from './components/Point2Page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='app'>
          <Header />
          <Routes>
            <Route path="/" element={<GameListPage />} />
            <Route path="/game/1" element={<QuizPage/>} />
            <Route path="/game/2" element={<ContextPage/>} />
            <Route path="/game/3" element={<Point2Page/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
