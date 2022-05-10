import style from './style.module.scss';
import cn from 'classnames';

const Menu = ({active, click}) => {

  return (
  <div className={cn(style.menuContainer, {[style.active] : active}, {[style.deactive] : !active})} onClick={click}>
  <div className={style.overlay} />
  <div className={style.menuItems}>
    <ul>
      <li>
        <a href="#welcome">
          HOME
        </a>
      </li>
      <li>
        <a href="#game">
          GAME
        </a>
      </li>
      <li>
        <a href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Menu;