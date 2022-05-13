import style from './style.module.scss';
import cn from 'classnames';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";
import ContactPage from './routes/ContactPage/'
import MenuHeader from './components/MenuHeader/'
import Footer from './components/Foooter/'
import NotFound from './routes/NotFound/'

const firebaseConfig = {
  apiKey: "AIzaSyBagxepN-U6YTyrosxuXCkbqFFCtgP5shI",
  authDomain: "pokemon-game-ef854.firebaseapp.com",
  databaseURL: "https://pokemon-game-ef854-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-ef854",
  storageBucket: "pokemon-game-ef854.appspot.com",
  messagingSenderId: "609701455610",
  appId: "1:609701455610:web:b4d6df5e3d19547133cb43"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dbRef = ref(database);
get(child(dbRef, 'pokemons')).then((snapshot) => {
  if(snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error(error);
})

const App = () => {
  const url = useLocation();
  return (
        <>
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
        </>
  )
}

export default App;