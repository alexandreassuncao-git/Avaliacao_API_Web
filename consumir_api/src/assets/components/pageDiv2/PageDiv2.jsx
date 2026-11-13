import style from './style.module.css'

function PageDiv2({children}){
  return(
    <>
      <div className={style.pageDiv2}>
        {/* Formulario, Select, Container */}
        {children}
      </div>
    </>
  )
}

export default PageDiv2