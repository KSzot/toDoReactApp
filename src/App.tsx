import React, { Fragment } from 'react';
import GlobalStyles, { Container } from './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { appState } from './data/reducers/appReducer';
import { AppState } from './data/store';
import { useSelector } from 'react-redux';
import { Layout, Task, Bored, Notes } from './container';
import { Route, Switch } from 'react-router-dom';

const App = (props: any) => {
  const isMode = useSelector((state: AppState) => state.mode.isMode);
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
        </Container>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
