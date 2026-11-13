import style from './style.module.css'

function Feedback({ feedback }) {
  return (
    <>
      <div className={`${style.div} ${style.feedbackBox}`}>
          <p className={style.feedbackTexto}>{feedback}</p>
      </div>
    </>
  );
}

export default Feedback;
