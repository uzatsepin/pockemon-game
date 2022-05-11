import style from './style.module.scss';
import cn from 'classnames';

const MENU = [
  {
    id: 1,
    title: 'HOME',
    to: '#welcome'
  },
  {
    id: 2,
    title: 'GAME',
    to: '#game'
  },
  {
    id: 3,
    title: 'ABOUT',
    to: '#about'
  },
  {
    id: 4,
    title: 'CONTACT',
    to: '#contact'
  }
]

const Menu = ({isOpen}) => {

  return (

  <div className={cn(style.menuContainer, 
  {[style.active] : isOpen === true}, 
  {[style.deactive] : isOpen === false})}>

  <div className={style.overlay} />
  <div className={style.menuItems}>
    <ul>
      {
        MENU.map(({title, to, id}) => <li key={id}><a href={to}>{title}</a></li>)
      }
    </ul>
  </div>
</div>
  )
}

export default Menu;