import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Comics from './pages-dinamics/comics/Comics'
import News from './pages-dinamics/news/News'
import Users from './pages-dinamics/users/Users'
import User from './pages-dinamics/users/User'
import Comic from './pages-dinamics/comics/Comic';
import New from './pages-dinamics/news/New';
import ComicsBack from './backend/comics-back/ComicsBack';
import UsersBackForm from './backend/users-back/users-back-form/UsersBackForm';
import UsersBack from './backend/users-back/UsersBack';
import NewsBack from './backend/news-back/NewsBack';

import NavBar from './layout/navBar/NavBar';
import Footer from './layout/footer/Footer'
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/inicio" element={<Home />}></Route>
          <Route path="/login" element={""}></Route>
          <Route path="/noticias" element={<News />}></Route>
          <Route path="/noticias/:id" element={<New></New>}></Route>
          <Route path="/comics" element={<Comics />}>
            <Route path="/comics/comicsback" element={<ComicsBack />}></Route>
          </Route>
          <Route path="/comics/:id" element={<Comic />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/comics/:id" element={<Comic />}></Route>
          <Route path="/comics/:id" element={<Comic />}></Route>
          <Route path="/usuarios" element={<Users />}></Route>
          <Route path="/usuarios/:id" element={<User />}></Route>
          <Route path="/quienes-somos" element={""}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
          <Route path="/usuarios-servidor" element={<UsersBack />}></Route>

          <Route path="/news-back" element={<NewsBack></NewsBack>}></Route>
          <Route path="/comics-back" element={<ComicsBack />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
