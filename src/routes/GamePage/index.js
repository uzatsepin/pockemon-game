import style from './style.module.scss';
import { useNavigate } from "react-router-dom";
import PockemonCard from "../../components/PockemonCard";
import pockemonCards from '../../data/pockemons.json'
import { useState } from 'react';

const GamePage = () => {

  const [pokemons, setPokemons] = useState(pockemonCards);

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/')
  }

  const handleChangeActivePokemons = (id) => {
    setPokemons(prevState => {
      return Array.from(prevState, (el) => {
        if(el.id === id){el.active = true};
        return el;
      })
    })
  }

  return (
    <>
      <div className={style.flex}>
          {
            pockemonCards.map(({name, img, id, type, values, active}) => (
              <PockemonCard 
                key={id}
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
}

export default GamePage;