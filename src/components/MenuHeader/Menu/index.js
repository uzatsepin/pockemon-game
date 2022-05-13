import style from './style.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const MENU = [
  {
    id: 1,
    title: 'HOME',
    to: '/'
  },
  {
    id: 2,
    title: 'GAME',
    to: '/game'
  },
  {
    id: 3,
    title: 'ABOUT',
    to: '/about'
  },
  {
    id: 4,
    title: 'CONTACT',
    to: '/contact'
  }
]

const Menu = ({isOpen, onClickHamburg}) => {

  return (

  <div className={cn(style.menuContainer, {
    [style.active] : isOpen === true,
    [style.deactive]: isOpen === false,
  })}>

  <div className={style.overlay} />
  <div>
    <ul>
      {
        MENU.map(({title, to, id}) => 
        (<li key={id}>
          <Link to={to} onClick={onClickHamburg}>
            {title}
          </Link>
          </li>
          ))
      }
    </ul>
  </div>
</div>
  )
}

export default Menu;