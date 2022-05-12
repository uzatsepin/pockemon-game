import style from './style.module.scss';
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/')
  }

  return (
    <>
    <h1 className={style.header}>404 – Page not found</h1>
    <button onClick={handleClickButton} className={style.btn}>
          Back to Game
      </button>
    </>
  )
}

export default NotFound;