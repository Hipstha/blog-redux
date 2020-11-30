import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Header from './shared/header/Header';
import Posts from './pages/posts/Posts';
import PostDetail from './pages/post-detail/PostDetail';

// redux
import { Provider } from 'react-redux';
import store from './redux/store/Store';

function App() {
  return (
    <>
      <Router> 
        <Provider store={store}>
          <div className="app">
            <Header />

            <Switch>
              <Route exact path='/'>
                <Redirect to='/posts' />
              </Route>
              <Route path='/posts' component={Posts} />
              <Route path='/post/:postId' component={PostDetail} />
            </Switch>
          </div>
        </Provider>
      </Router>
    </>
  );
}

export default App;
