import React, { useEffect, useState } from 'react';
import { Router as DefaultRouter, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Services from './Containers/Services';
import Process from './Containers/Process';
import Error404 from './Containers/Error404';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

var createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();

const App = () => {
  const getIsSmall = () => {
    const { innerWidth: width } = window;
    return width <= 800;
  };

  const [isSmall, setIsSmall] = useState(getIsSmall());
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(getIsSmall());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.location.href.split('?404_REDIRECT').length > 1)
      history.push(window.location.href.split('?404_REDIRECT')[1]);
  }, []);

  return (
    <DefaultRouter history={history}>
      <NavBar isSmall={isSmall} />
      <div style={{ position: 'relative' }}>
        <div
          className="gradient-bg"
          style={{
            height: '600px',
            position: 'absolute',
            width: '100vw',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        ></div>
        <div
          style={{
            minHeight: '900px',
            zIndex: 10,
            paddingTop: '110px',
          }}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} isSmall={isSmall} />}
            />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} isSmall={isSmall} />}
            />
            <Route
              exact
              path="/services"
              render={(props) => <Services {...props} isSmall={isSmall} />}
            />
            <Route
              exact
              path="/process"
              render={(props) => <Process {...props} isSmall={isSmall} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} isSmall={isSmall} />}
            />
            <Route
              path="/"
              render={(props) => <Error404 {...props} isSmall={isSmall} />}
            />
          </Switch>
        </div>
      </div>

      <Footer isSmall={isSmall} />
    </DefaultRouter>
  );
};

export default App;
