import style from './style.module.scss';
import { useNavigate } from "react-router-dom";
import PockemonCard from "../../components/PockemonCard";
import { useState, useEffect } from 'react';
import { database } from '../../services/firebase';
import { ref, child, get } from "firebase/database";

const GamePage = () => {

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'pokemons')).then((snapshot) => {
      if(snapshot.exists()) {
        setPokemons(snapshot.val());
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    })
  }, []);

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/')
  }

  const handleChangeActivePokemons = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if(pokemon.id === id) {
          pokemon.active = true;
      };
      acc[item[0]] = pokemon;
      return acc;
      }, {});
  });
};

  return (
    <>
      <div className={style.flex}>
          {
            Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
              <PockemonCard 
                key={key}
                isActive={active}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                onCardClick={handleChangeActivePokemons}/>
            ))
          }
       </div>
      <button onClick={handleClickButton} className={style.btn}>
          Back to Game
      </button>
    </>
  )
};

export default GamePage;