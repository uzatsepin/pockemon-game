import { initializeApp } from "firebase/app";
import { getDatabase, set } from "firebase/database";
import { ref, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBagxepN-U6YTyrosxuXCkbqFFCtgP5shI",
  authDomain: "pokemon-game-ef854.firebaseapp.com",
  databaseURL: "https://pokemon-game-ef854-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-ef854",
  storageBucket: "pokemon-game-ef854.appspot.com",
  messagingSenderId: "609701455610",
  appId: "1:609701455610:web:b4d6df5e3d19547133cb43"
};

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.database = getDatabase(this.app)
    this.dbRef = ref(this.database)
  }
  getPokemonsOnce = async () => {
    return await get(child(this.dbRef, 'pokemons')).then((snapshot) => snapshot.val())
  }
  postPokemon = (key, pokemon) => {
    set(ref(this.database, `pokemons/${key}`), {
      ...pokemon
    })
  }
}

export default Firebase;
