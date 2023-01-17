import { useEffect } from 'react'
// css
import styles from '../style/input.module.css'
// hook
import { useInput } from '../hooks/useInput'
/** Input componentn: parameter => placeholder, type, validator, callback  */
function Input({placeholder = "please", type = "text", validator = ()=>{}, callback, trigger}) {
  // useInput
  const input = useInput("", validator)
  // value from input
  const { value, setValue } = input
  // observe value
  useEffect(() => {
    typeof callback === 'function' && callback(value)
  }, [value])
  // trigger: if true, clear input
  useEffect(() => {
    if(trigger === true) setValue("")
  }, [trigger])
  return (
    <div className={styles.container}>
      {type === "textArea" ? <textarea placeholder={placeholder} value={input.value} onChange={input.onChange} /> : <input placeholder={placeholder} value={input.value} onChange={input.onChange} />}
    </div>
  );
}
export default Input
