import styles from '../style/header.module.css'
import Title from '../componenents/Title'
import Navbar from './Navbar'

function Header() {
  return (
    <div className={styles.container}>
      <Title title={"DAD JOKE"}></Title>
      <Navbar></Navbar>
    </div>
  );
}

export default Header
