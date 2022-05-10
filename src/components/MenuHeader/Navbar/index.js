import style from './style.module.scss';
import cn from 'classnames'


const NavBar = ({active, click}) => {

  console.log(active);

  return (
    <nav className={style.root}>
  <div className={style.NavWrapper}>
    <p className={style.brand}>
      LOGO
    </p>
    <a  href='#active' 
        className={cn(style.menuButton, {[style.active] : active})}
        onClick={click}
        >
      <span />
    </a>
  </div>
</nav>
  )
}

export default NavBar;