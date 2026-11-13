import style from './style.module.css'

function Feedback({ feedback }) {
  return (
    <>
      <div style={{width: 'fit-content'}} className={style.div}>
          <p>{feedback}</p>
      </div>
    </>
  );
}

export default Feedback;
