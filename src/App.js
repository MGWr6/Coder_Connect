import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/HomeFeed';
import './components/NavBar';
import './components/ProfilePage';
import './components/error404'

function App() {
  return (
    <BrowserRouter> 
    <NavBar></NavBar>
    <Switch>
      <Route exact path="/" component={HomeFeed}></Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
