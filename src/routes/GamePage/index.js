import style from './style.module.scss';
import { useNavigate } from "react-router-dom";
import PockemonCard from "../../components/PockemonCard";
import pockemonCards from '../../data/pockemons.json'

const GamePage = () => {

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/')
  }

  return (
    <>
      <div className={style.flex}>
          {
            pockemonCards.map(item => <PockemonCard {...item} key={item.id}/>)
          }
       </div>
      <button onClick={handleClickButton} className={style.btn}>
          Back to Game
      </button>
    </>
  )
}

export default GamePage;