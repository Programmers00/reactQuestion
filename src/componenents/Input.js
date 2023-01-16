import { useEffect } from 'react'
// css
import styles from '../style/input.module.css'
// hook
import { useInput } from '../hooks/useInput'

function Input({placeholder, validator = ()=>{console.log("##validator")}, callback}) {
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
          <input placeholder={placeholder}{...input} />
    </div>
  );
}
export default Input
