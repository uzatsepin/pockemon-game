import style from './style.module.scss';
import {useNavigate} from 'react-router-dom';

const Header = ({title, descr}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game')
  }

  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.silhouette}></div>
      <div className={style.moon}></div>
      <div className={style.container}>
          <h1>{title}</h1>
          <p>{descr}</p>
          <button onClick={handleClick}>
            Start Game
          </button>
      </div>
  </header> 
  )
};

export default Header;