import {useState} from 'react'
// css
import styles from '../style/history.module.css'

function History() {
  // jokes: when localStorage has jokes(key) and localStorage jokes array(value) is not empty, localStorage jokes array is used. if not default empty array. 
  const [history, setHistory] = useState(localStorage.jokes && JSON.parse(localStorage.jokes).length !== 0 ? JSON.parse(localStorage.getItem("jokes")) : [])
  return (
    <div className={styles.container}>
      <div>
        {history.map((joke, index) => <h2 key={index}>{joke}</h2>)}
      </div>
    </div>
  );
}
export default History;