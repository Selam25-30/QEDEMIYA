import React from 'react';
import Home from './component/Home/Home';
import Rout from './component/Rout/Rout'
import Footer from './component/Footer/Footer'
// import Service from './component/Service/Service';
// import About from './component/About/About';
// import Contact from './component/Contact/Contact';
import SignIn from './component/SignIn/SignIn.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Rout />
        <Home /> 
        <SignIn />

        {/* <Service />
        <About />
        <Contact /> */}
        <Footer />
      </div>)
  }
}
export default App;