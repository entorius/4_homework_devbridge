import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import HomePage from './HomePage';
import NotesPage from './NotesPage';
import NotFoundPage from './NotFoundPage';
import TodoListPage from './TodoListPage';
import DeletedTodosPage from './DeletedTodosPage';
import TodoPage from './TodoPage';
import store from './state/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/todos" component={TodoListPage} />
            <Route path="/deletedTodos" component={DeletedTodosPage} />
            <Route path="/todo/:id" component={TodoPage} />
            <Route path="/notes" component={NotesPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
