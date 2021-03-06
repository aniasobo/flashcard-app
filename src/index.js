import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // this is the stack from reducers/index.js
import App from './components/App';
import Stack from './components/Stack'; 
import StackForm from './components/StackForm';
import { setStack } from './actions';
import './index.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 666, title: "test", cards: [] }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/stack' component={Stack} />
        <Route path='/stack_form' component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));