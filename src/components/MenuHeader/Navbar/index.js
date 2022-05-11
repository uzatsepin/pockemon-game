import style from './style.module.scss';
import cn from 'classnames'


const NavBar = ({isOpen, bgActive = false, onClickHamburg}) => {

  return (
    <nav id={style.navbar} className={cn({[style.bgActive] : bgActive})}>
    <div className={style.navWrapper}>
      <p className={style.brand}>
        LOGO
      </p>
      <div className={cn(style.menuButton, {[style.active] : isOpen})} onClick={onClickHamburg}></div>
      <span />
  </div>
</nav>
  )
}

export default NavBar;