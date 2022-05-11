import style from './style.module.scss';
import cn from 'classnames'


const NavBar = ({isOpen, bgActive = true, onClickHamburg}) => {

  return (
    <nav className={cn(style.root, {
      [style.bgActive] : bgActive
    })}>
      <div className={style.navWrapper}>
        <p className={style.brand}>LOGO</p>
        <div className={cn(style.menuButton, {
          [style.active] : isOpen
        })}
          onClick={onClickHamburg}>
          <span />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;