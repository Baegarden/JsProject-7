import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home'; // 라우터
import Detail from './routes/Detail'; // 라우터

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
