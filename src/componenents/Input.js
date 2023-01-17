import { useEffect } from 'react'
// css
import styles from '../style/input.module.css'
// hook
import { useInput } from '../hooks/useInput'
/** Input componentn: parameter => placeholder, type, validator, callback  */
function Input({placeholder = "please", type = "text", validator = ()=>{}, callback}) {
  // useInput
  const input = useInput("", validator)
  // value from input
  const { value } = input
  
  // observe value
  useEffect(() => {
    typeof callback === 'function' && callback(value)
  }, [value])
  return (
    <div className={styles.container}>
      {type === "textArea" ? <textarea placeholder={placeholder}{...input}/> : <input placeholder={placeholder}{...input} />}
    </div>
  );
}
export default Input
