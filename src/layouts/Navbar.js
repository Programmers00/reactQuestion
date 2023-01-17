import styles from '../style/navbar.module.css'
import { Link } from 'react-router-dom'
import Button from '../componenents/Button'

function Navbar() {
  return (
    <div className={styles.container}>
        <Link to="/">
          <Button title={"DASHBOARD"}></Button>
        </Link>
        <Link to="/addJoke">
          <Button title={"ADD JOKE"}></Button>
        </Link>
        <Link to="/history">
          <Button title={"HISTORY"}></Button>
        </Link>
      </div>
  );
}
export default Navbar
