import style from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
  
  return (
    <section className={style.root} style={
      {backgroundColor: `${colorBg}`,
      backgroundImage: `url(${urlBg})`,
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      }
  }>
    <div className={style.wrapper}>
        <article>
            <div className={style.title}>
                <h3>{title ? title : null}</h3>
                <span className={style.separator}></span>
            </div>
            <div className={`${style.desc} ${style.full}`}>
                <p>{descr ? descr : null}</p>
            </div>
        </article>
    </div>
</section>
  )
};

export default Layout;