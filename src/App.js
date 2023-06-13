import './App.css';
import Nav from './layout/nav/nav'
import {
	BrowserRouter as Router, 
	Routes,
	Route, 
	Link
} from 'react-router-dom';
import News from './pages-dinamics/news/News';
import New from './pages-dinamics/news/New';
  

function App() {
  return (
    <>
      <Router>
		<Nav/>
          <Routes>
                <Route exact path="/" element={""}></Route>
                <Route path="/login" element={""}></Route>
                <Route path="/comics" element={""}></Route>
                <Route path="/quienes-somos" element={""}></Route>
                <Route path="/contacto" element={""}></Route>
                <Route path="/noticias" element={<News></News>}></Route>
                <Route path="/noticias/:id" element={<New></New>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
