import styles from '../style/button.module.css'

function Button({title}) {
    return (
        <button className={styles.button}>{title}</button>
    )
}
export default Button;