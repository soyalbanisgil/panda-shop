import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './pages/SignInSignUp/SignIn';
import { SignUp } from './pages/SignInSignUp/SignUp';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { Contact } from './pages/Contact/Contact';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AddProductForm } from './components/AddProductForm/AddProductForm';
import { Category } from './pages/Category/Category';

Modal.setAppElement('#root');

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(null);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className='App'>
      <Navbar currentUser={currentUser} setModalIsOpen={setModalIsOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            background: 'rgba(0,0,0,0.5)',
          },
        }}
      >
        <AddProductForm setModalIsOpen={setModalIsOpen} />
      </Modal>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/sign-in'>
          <SignIn currentUser={currentUser} />
        </Route>
        <Route path='/sign-up' component={SignUp} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/contact' component={Contact} />
        <Route path='/category/:category' component={Category} />
      </Switch>
    </div>
  );
}

export default App;
