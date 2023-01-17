// css
import styles from '../style/history.module.css'
// hook
import { useLocalStorage } from '../hooks/useLocalStorage';

function History() {
  // jokes data from localStorage, if "jokes" is not, make default []
  const [history, setHistory] = useLocalStorage("jokes", [])
  return (
    <div className={styles.container}>
      {history.map((joke, index) => <div className={ styles.content} key={index}>{joke}</div>)}
    </div>
  );
}
export default History;