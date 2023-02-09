import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/footer/Footer";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router} from 'react-router-dom'

import AppRouter from './components/router/router';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />

        <div fluid className="my-5 d-flex flex-wrap justify-content-center ">
          <AppRouter/>

        </div>
      </Router>


      <Footer />
    </div>
  );
}

export default App;
