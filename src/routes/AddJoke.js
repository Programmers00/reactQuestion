import { useEffect, useState } from 'react'
// css
import styles from '../style/addJoke.module.css'
// componenents
import Button from '../componenents/Button'
import Input from '../componenents/Input'
// hook
import { useLocalStorage } from '../hooks/useLocalStorage'

function AddJoke() {
  /** data */
  // joke
  const [newJoke, setNewJoke] = useState('')
  // jokes data from localStorage, if "jokes" is not, make default []
  const [jokes, setJokes] = useLocalStorage("jokes",[])
  // trigger clear
  const [clear, setClear] = useState(false)
  /** function: check validation*/
  const maxLengthValidator = (value) => value.length <= 100
  /** function: observe joke in inputbox */
  const observeJoke = (jokeData) => {
    setClear(false)
    setNewJoke(jokeData)
  }
  /** function: add new joke */
  const addJoke = () => {
    newJoke.length !== 0 && setJokes([...jokes, newJoke])
    setNewJoke("") //add joke to localStorage jokes
    setClear(true)
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Input type="textArea" placeholder="Please Type A New Joke" validator={maxLengthValidator} callback={observeJoke} trigger={clear}></Input>
      </div>
      <div className={styles.buttonContainer}>
        <Button title="Add A New Joke" onClick={addJoke} style={{ width: '50vw'}}></Button>
        </div>
    </div>
  );
}
export default AddJoke;