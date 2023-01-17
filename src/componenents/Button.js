// css
import styles from '../style/button.module.css'
/** Button Component : parameter => title, style, onClick */
function Button({ title, style = {}, onClick = () => { } }) {
    return (
        <div className={styles.container}>
            <button onClick={onClick} className={styles.button} style={style}>{title}</button>
        </div>
    )
}
export default Button;