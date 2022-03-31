import Navibar from './components/Navibar'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import Favorite from './pages/Favorite'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import {Brands} from './pages/Brands'


function App() {
  return (
   
    <>
    
    <Router>
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/brands" element={<Brands/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/favorite" element={<Favorite/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
