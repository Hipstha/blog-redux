import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Header from './shared/header/Header';
import Posts from './pages/posts/Posts';
import PostDetail from './pages/post-detail/PostDetail';

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/posts' />
            </Route>
            <Route path='/posts' component={Posts} />
            <Route path='/post/:postId' component={PostDetail} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
