import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './pages/common/Header';
import MainTop from './pages/common/MainTop';
import MainContent from './components/MainContent';
import Footer from './pages/common/Footer';

function App() {
  return (
    <Router>
       <Header />
    <div>
      <Route exact path="/" component={MainTop}/>
      <Route exact path="/" component={MainContent}/>
      
    </div>
     <Footer />
    </Router>
  );
}

export default App;
