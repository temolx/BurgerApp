import './App.css';
import MealList from './components/MealList';
import Nav from './components/Nav';
import Burger from './components/Burger';
import Contact from './components/Contact';
import Recipe from './components/Recipe'
import Purchased from './components/Purchased';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={<MealList />} />
          <Route path='/burger' element={<Burger />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/purchased' element={<Purchased />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
