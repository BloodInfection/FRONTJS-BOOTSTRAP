import Navibar from './components/Navibar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Categories from './pages/Categories'
import Favorite from './pages/Favorite'
import Search from './pages/Search'


import AdminNaviBar from './components/AdminNavibar'

import AdminCategories from './pages/AdminCategories'
import AdminBrands from './pages/AdminBrands'
import AdminProducts from './pages/AdminProducts'
import AdminProductsFinal from './pages/AdminProducts-Final'
import AdminColors from './pages/AdminColors'
import AdminSizes from './pages/AdminSizes'
import AdminHome from './pages/AdminHome'




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
    <Footer/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/brands" element={<Brands/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/favorite" element={<Favorite/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        
        <Route path="/admin" element={<AdminHome/>}></Route>
          
          <Route path="/admin/categories" element={<AdminCategories/>}></Route>
          <Route path="/admin/brands" element={<AdminBrands/>}></Route>
          <Route path="/admin/products" element={<AdminProducts/>}></Route>
          <Route path="/admin/colors" element={<AdminColors/>}></Route>
          <Route path="/admin/products-final" element={<AdminProductsFinal/>}></Route>
          <Route path="/admin/sizes" element={<AdminSizes/>}></Route>
          
       
        
        
       
        
        
    
      </Routes>

     

    </Router>
   
    </>
  );
}

export default App;
