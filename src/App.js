import './App.css';
import Nav from './layout/nav/nav'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Comics from './pages-dinamics/comics/Comics'
import News from './pages-dinamics/news/News'
import Users from './pages-dinamics/users/Users'
import User from './pages-dinamics/users/User'
import Comic from './pages-dinamics/comics/Comic';
import New from './pages-dinamics/news/New';
import ComicsBack from './backend/comics-back/ComicsBack';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={""}></Route>
          <Route path="/login" element={""}></Route>
          <Route path="/noticias" element={<News />}></Route>
          <Route path="/noticias/:id" element={<New></New>}></Route>
          <Route path="/comics" element={<Comics />}>
		  	<Route path="/comics/comicsback" element={<ComicsBack />}></Route>
		  </Route>
		  <Route path="/comics/:id" element={<Comic />}></Route>
          <Route path="/usuarios" element={<Users />}></Route>
          <Route path="/usuarios/:id" element={<User />}></Route>
          <Route path="/quienes-somos" element={""}></Route>
          <Route path="/contacto" element={""}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
