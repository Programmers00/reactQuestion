// router
import { Link } from 'react-router-dom'
// css
import styles from '../style/navbar.module.css'
// components
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
