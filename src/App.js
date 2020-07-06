import React, { Suspense, useState, useEffect, useLayoutEffect  } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './styles/MainSub.css';
import './styles/App.css';

import Language from './Components/Language'
import Title from './Components/Title'
import Main from './Components/Pages/Main'
import Idle from './Components/Pages/Idle'
import Nav from './Components/Nav'
import Sub from './Components/Pages/Sub'
import Rotate from './Components/Rotate'
import Typ from './Components/Pages/Typ'
import PreloadImages from './Components/PreloadImages'
import CopyRights from './Components/Pages/CopyRights'
import Impressum from './Components/Pages/Impressum'

import picDB from './db/pics.json'

// loading component for suspense fallback
const Loader = () => (
    <div className="App">
        <div>loading...</div>
    </div>
);

const allRoutes = [];
for (let [key, value] of Object.entries(picDB)) {
    allRoutes.push(key)
}

PreloadImages();

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {

    const [isRotated, rotate] = useState(false);
    const [subRoutes, changeSubRoutes] = useState(allRoutes);
    const [typRoutes, changeTypRoutes] = useState(["1","2","3","4","5","6","7","8","9","10","11"]);


    const toggleRotate = () => {
        rotate(!isRotated);
    }

    const rotateViewZ = isRotated ? {
        zIndex: '-10',
        width: '1366px',
        height: '768px',
        transform: 'rotate3d(1, 0, 0, 180deg) perspective(1px)',
        transformOrigin: '50% 50%',
        transition: 'transform 500ms ease',
    } : {
        zIndex: '-10',
        width: '1366px',
        height: '768px',
        transition: 'transform 500ms ease',
        transformOrigin: '50% 50%',
    }

    const rotateViewY = isRotated ? {
        zIndex: '-10',
        width: '1366px',
        height: '768px',
        transform: 'rotateY(180deg) perspective(1px)',
        transformOrigin: '50% 50%',
        transition: 'transform 250ms ease',
        transitionDelay: '100ms',
    } : {
        zIndex: '-10',
        width: '1366px',
        height: '768px',
        transition: 'transform 250ms ease',
        transitionDelay: '100ms',
    }

    return (
            <Suspense fallback={<Loader />}>
              <div style={rotateViewZ}>
                  <div style={rotateViewY}>
                      <Title/>
                      <Router>
                      {/* <IdleFunction/> */}
                          <div className='container'>
                              <Route render={({location}) =>
                                  <TransitionGroup>
                                      <CSSTransition
                                          key={location.key}
                                          timeout={300}
                                          classNames='fade'
                                      >
                                          <Switch location={location}>
                                              <Route path='/'exact component={Idle} />
                                              {/* <Route path='/main' component={Main} /> */}
                                              <Route
                                                path='/main'
                                                render={(props) =>
                                                  <Main
                                                    elements={typRoutes}/>}
                                              />

                                              {subRoutes.map(subRoute => (
                                                  <Route
                                                    key={`/sub${subRoute}`}
                                                    path={`/sub${subRoute}`}
                                                    render={(props) =>
                                                      <Sub {...props}
                                                        sub={subRoute}
                                                        isRotated={isRotated}
                                                        types={typRoutes}
                                                      />}
                                                  />
                                              ))}
                                              {typRoutes.map(typRoute => (
                                                  <Route
                                                    key={`/typ${typRoute}`}
                                                    path={`/typ${typRoute}`}
                                                    render={(props) =>
                                                      <Typ {...props}
                                                        typ={typRoute}
                                                        types={typRoutes}
                                                        subs={subRoutes.filter(route => route.slice(0, route.indexOf('-')) === typRoute )}
                                                        isRotated={isRotated}
                                                      />}
                                                  />
                                              ))}
                                              <Route path='/copyrights' component={CopyRights} />
                                              <Route path='/impressum' component={Impressum} />
                                          </Switch>

                                      </CSSTransition>
                                  </TransitionGroup>
                              }/>

                          </div>
                          <Nav/>
                      </Router>
                      <Rotate toggleRotate={toggleRotate}/>
                      <Language />
                  </div>
              </div>
            </Suspense>
    );
}
