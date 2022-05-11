import MenuHeader from "../../components/MenuHeader";
import style from './style.module.scss';

const GamePage = ({onChangePage, bgActive = true}) => {

  const handleClickButton = () => {
    console.log('####: <HomePage/>');
    onChangePage && onChangePage('app');
  }

  return (
    <>
      <MenuHeader bgActive={bgActive}/>
      <button onClick={handleClickButton} className={style.btn}>
          Back to Game
      </button>
    </>
  )
}

export default GamePage;