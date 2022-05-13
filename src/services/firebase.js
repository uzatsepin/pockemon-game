import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

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

export const dbRef = ref(database);
get(child(dbRef, 'pokemons')).then((snapshot) => {
  if(snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error(error);
})