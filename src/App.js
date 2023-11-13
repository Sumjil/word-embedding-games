import './App.css';
import Header from './components/header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='app'>
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
