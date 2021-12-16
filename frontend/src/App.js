import { 
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';

import './styles/App.css';
import Home from './components/core/Home';
import About from './components/core/About';
import Navigation from './components/core/Navigation' ;
import NotesList from './components/notes/NotesList';
import FormNote from './components/notes/FormNote';
import AddUser from './components/user/AddUser';

export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <div className="container p-4">
        <Routes>
          <Route path="/" exact element={ <Home/> }/>
          <Route path="/notes" element={ <NotesList/> }/>
          <Route path="/notes/add" element={ <FormNote/> }/>
          <Route path="/user" element={ <AddUser/> }/>
          <Route path="/about" exact element={ <About/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

