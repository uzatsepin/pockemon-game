import style from './style.module.scss';

const Layout = ({title, urlBg, colorBg, children}) => {

  const sectionStyle = {};
  if(urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`;
  }
  if(colorBg) {
    sectionStyle.backgroundColor = colorBg;
  }
  
  return (
    <section className={style.root} style={sectionStyle}>
    <div className={style.wrapper}>
        <article>
            <div className={style.title}>
              {title && <h3>{title}</h3>}  
              <span className={style.separator}></span>
            </div>
            <div className={`${style.desc} ${style.full}`}>
                {children ? children : ''}
            </div>
        </article>
    </div>
</section>
  )
};

export default Layout;