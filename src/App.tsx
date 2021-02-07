import { Route, Switch, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { NavBar } from './components/NavBar';
import { AboutPage } from './components/pages/AboutPage';
import { LinksPage } from './components/pages/LinksPage';
import { SkillsPage } from './components/pages/SkillsPage';

export const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, (loc) => loc.pathname, {
    from: {
      transform: 'rotateX(-90deg)',
      position: 'absolute',
      transformOrigin: 'top',
      overflow: 'hidden',
    },
    enter: { transform: 'rotateX(0)', opacity: 1, overflow: 'auto' },
    leave: {
      transform: 'rotateX(-90deg)', transformOrigin: 'bottom', opacity: 0, overflow: 'hidden',
    },
  });

  return (
    <div className="bg-dark text-white w-full min-h-screen font-roboto flex">
      <NavBar />
      <div className="relative flex-grow">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props} className="origin-top w-full bg-dark">
            <Switch location={item}>
              <Route path="/" exact>
                <AboutPage />
              </Route>
              <Route path="/links" exact>
                <LinksPage />
              </Route>
              <Route path="/skills" exact>
                <SkillsPage />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
};
