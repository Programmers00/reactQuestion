import { useState } from "react"
    
/** hook useInput: parameter => initialValue, validator */
export const useInput = (initialValue, validator) => {
  // value: initialValue -> e.target.value
  const [value, setValue] = useState(initialValue)
    const onChange = (e) => {
        const {
            target: {value}
        } = e
        let willUpdate = true
        if (typeof validator === 'function') {
            willUpdate = validator(value) // validator return true or false
        }
        if (willUpdate) {
        setValue(value)
    }
  }
  return {value, onChange, setValue}
}