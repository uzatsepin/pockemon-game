import style from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {

  const sectionStyle = {};
  if(urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`;
  }
  console.log(sectionStyle);
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
                {descr && <p>{descr}</p>}
            </div>
        </article>
    </div>
</section>
  )
};

export default Layout;