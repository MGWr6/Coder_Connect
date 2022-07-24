import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeFeed from './components/HomeFeed';
  import Navigation from './components/Navigation';
  import ProfilePage from './components/ProfilePage';
  import Error404 from './components/Error404';
  import LogIn from './components/LogIn';

function App() {
  return(

    <BrowserRouter> 
    <Navigation />
      <Routes>
          <Route exact path="/home" component={HomeFeed}/>
          <Route exact path="/profile" component={ProfilePage}/>
          <Route path="/error404" component={Error404} />
          <Route path="/login" component={LogIn} />
      </Routes>
   </BrowserRouter>
  )

  
    
     
  
}

export default App;
