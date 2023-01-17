import { useState } from 'react'
// css
import styles from '../style/addJoke.module.css'
// componenents
import Button from '../componenents/Button'
import Input from '../componenents/Input'

function AddJoke() {
  /** data */
  // joke: 
  const [newJoke, setNewJoke] = useState('')
  // jokes: when localStorage has jokes(key) and localStorage jokes array(value) is not empty, localStorage jokes array is used. if not default empty array. 
  const [jokes, setJokes] = useState(localStorage.jokes && JSON.parse(localStorage.jokes).length !== 0 ? JSON.parse(localStorage.getItem("jokes")) : [])
  /** function: check validation*/
  const maxLengthValidator = (value) => value.length <= 100
  /** function: observe joke in inputbox */
  const observeJoke = (jokeData) => {
    setNewJoke(jokeData)
  }
  /** function: add new joke */
  const addJoke = () => {
    newJoke.length !== 0 && setJokes([...jokes, newJoke])
  }
  // save jokes array data to localStorage
  localStorage.setItem("jokes", JSON.stringify(jokes))
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Input type="textArea" placeholder="Please Type A New Joke" validator={maxLengthValidator} callback={observeJoke}></Input>
      </div>
      <div className={styles.buttonContainer}>
        <Button title="Add A New Joke" onClick={addJoke} style={{ width: '50vw'}}></Button>
        </div>
    </div>
  );
}
export default AddJoke;