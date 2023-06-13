import './App.css';
import Nav from './layout/nav/nav'
import {
	BrowserRouter as Router, 
	Routes,
	Route, 
	Link
} from 'react-router-dom';
  

function App() {
  return (
    <>
      <Router>
		<Nav/>
          <Routes>
                <Route path="/" element={""}></Route>
                <Route path="/login" element={""}></Route>
                <Route path="/comics" element={""}></Route>
				<Route path="/quienes-somos" element={""}></Route>
				<Route path="/contacto" element={""}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
