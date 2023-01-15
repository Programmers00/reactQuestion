import styles from '../style/title.module.css'

function Title({title}) {
    return (
        <h1 className={styles.title}>{title}</h1>
    )
}
export default Title;