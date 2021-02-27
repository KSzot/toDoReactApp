import React, { Fragment, useEffect } from 'react';
import GlobalStyles, { Container } from './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { appState } from './data/reducers/appReducer';
import { AppState } from './data/store';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Task, Bored, Notes } from './container';
import { Route, Switch } from 'react-router-dom';
import { keys, getValue } from './data/localStorage';
import { toggleMode } from './data/actions/appAction';
import { Button } from './components';
import { Shape } from './helpers';
const App = (props: any) => {
  const isMode = useSelector((state: AppState) => state.mode.isMode);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (getValue(keys.IS_MODE)) {
  //     console.log(getValue(keys.IS_MODE));
  //     dispatch(toggleMode(getValue(keys.IS_MODE)));
  //   }
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles mode={isMode} />
        <Container mode={isMode}>
          <Layout mode={isMode}>
            <Switch>
              <Route path='/bored' exact component={Bored} />
              <Route path='/notes' exact component={Notes} />
              <Route path='/' exact component={Task} />
            </Switch>
          </Layout>
          <div className='container-right'>
            <div className='container-right__topButton'>
              <Button variant={Shape.square}>Focus</Button>
              <Button variant={Shape.square}>Relax</Button>
            </div>
            Tekst raz dwa
          </div>
        </Container>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
