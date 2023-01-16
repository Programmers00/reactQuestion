import styles from '../style/button.module.css'

function Button({ title, onClick = ()=>{}}) {
    return (
        <button onClick={ onClick } className={styles.button}>{title}</button>
    )
}
export default Button;