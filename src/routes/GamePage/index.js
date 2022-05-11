import MenuHeader from "../../components/MenuHeader";
import style from './style.module.scss';

const GamePage = ({onChangePage}) => {

  const handleClickButton = () => {
    console.log('####: <HomePage/>');
    onChangePage && onChangePage('app');
  }

  return (
    <>
      <MenuHeader/>
      <button onClick={handleClickButton} className={style.btn}>
          Back to Game
      </button>
    </>
  )
}

export default GamePage;