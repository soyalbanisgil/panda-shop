import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './pages/SignInSignUp/SignIn';
import { SignUp } from './pages/SignInSignUp/SignUp';
import { ShopPage } from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
