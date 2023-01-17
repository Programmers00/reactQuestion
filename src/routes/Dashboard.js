import {useState, useEffect} from 'react'
// css
import styles from '../style/dashboard.module.css'
// custom hooks
import { useAxios } from '../hooks/useAxios'
import { useLocalStorage } from '../hooks/useLocalStorage'
// components
import Button from '../componenents/Button'
import Loading from '../componenents/Loading'

function Dashboard() {
  /** data */
  const [joke, setJoke] = useState('')
  // jokes data from localStorage, if "jokes" is not, make default []
  const [jokes, setJokes] = useLocalStorage("jokes", [])
  /** call api */
  const { loading, data, error, refetch } = useAxios({ url: "https://icanhazdadjoke.com/", headers: { Accept: "application/json" } })
  // console.log(`Loading: ${loading}\nData: ${data && data.data && data.data.joke}\nError: ${error}`)
  /** function: add joke */
  const saveJoke = () => {
    if (data&&data.data) {
      setJoke(data.data.joke) //update joke
      setJokes([...jokes, data.data.joke])  //add joke to localStorage jokes
    }
  }
  useEffect(() => saveJoke(), [data])
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {loading ? <Loading/> : data && !error ? <h1>{joke}</h1> : <h1>Error</h1>}
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={refetch} title="Get A Joke" style={{ width: '50vw'}}></Button>
        </div>
    </div>
    )
}
export default Dashboard;