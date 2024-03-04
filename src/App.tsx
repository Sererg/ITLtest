import './App.scss'
import '../src/style/styles.scss'
import Header from './components/header/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import UserInfo from './pages/userInfo/UserInfo';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import { Provider } from 'react-redux';
import { store } from './services/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <div className="wrapper">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/users/:id" element={<UserInfo />} />
                <Route path="/favorites" element={<FavoritesPage/>} />
                <Route path="/favorites/users/:id" element={<UserInfo />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
    </Provider>
 
  );
}

export default App
