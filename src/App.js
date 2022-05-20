import style from './style.module.scss';
import cn from 'classnames';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from './routes/ContactPage/'
import MenuHeader from './components/MenuHeader/'
import Footer from './components/Foooter/'
import NotFound from './routes/NotFound/'
import firebaseContext from './services/firebaseContext';
import Firebase from './services/firebase';

const App = () => {
  const url = useLocation();

  return (
        <>
        <firebaseContext.Provider value={new Firebase()}>
          <MenuHeader bgActive={url.pathname !== '/'}/>
          <div className={cn(style.wrap, {
            [style.isHomePage] : url.pathname === '/'
          })}>
            <Routes>
            <Route path="*" element={<NotFound />}
              />
              <Route exact path="/" element={<HomePage bgActive={false} />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route render={() => (
                <Navigate to="/404"/>
              )}/>
            </Routes>
          </div>
          <Footer/>
          </firebaseContext.Provider>
        </>
  )
}

export default App;