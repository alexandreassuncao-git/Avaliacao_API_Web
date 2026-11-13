import style from './style.module.css'

function PageDiv1({children}){
  return(
    <>
      <div className={style.pageDiv1}>
        {/* Intro, Footer */}
        {children}
      </div>
    </>
  )
}

export default PageDiv1