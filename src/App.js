import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />

          <Section info="user" />

          <Switch>

            <Route exact path="/">
              <Section info="about" />
              <hr />
              <Section info="skills" />
              <hr />
              <Section info="quali" />
              <hr />
              <Section info="projects" />
            </Route>
            <Route path="/index.html">
              <Section info="about" />
              <hr />
              <Section info="skills" />
              <hr />
              <Section info="quali" />
              <hr />
              <Section info="projects" />
            </Route>
            <Route path="/about">
              <Section info="about" />
            </Route>
            <Route path="/skills">
              <Section info="skills" />
            </Route>
            <Route path="/quali">
              <Section info="quali" />
            </Route>
            <Route path="/projects">
              <Section info="projects" />
            </Route>
          </Switch>


          <Footer />
        </div>
      </Router>
    </>
  );
}




// function App() {
//   return (
//     <>
//       <div className="container">
//         <Header />

//         <Section info="user" />
//         <Section info="about" />
//         <hr />
//         <Section info="skills" />
//         <hr />
//         <Section info="quali" />
//         <hr />
//         <Section info="projects" />

//         <Footer />
//       </div>
//     </>
//   );
// }

export default App;
