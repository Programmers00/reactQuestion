import {useState, useEffect} from 'react'
// css
import styles from '../style/dashboard.module.css'
// custom hooks
import { useAxios } from '../hooks/useAxios'
// components
import Button from '../componenents/Button'

function Dashboard() {
  /** data */
  const [joke, setJoke] = useState('')
  // jokes: when localStorage has jokes(key) and localStorage jokes array(value) is not empty, localStorage jokes array is used. if not default empty array. 
  const [jokes, setJokes] = useState(localStorage.jokes && JSON.parse(localStorage.jokes).length !== 0 ? JSON.parse(localStorage.getItem("jokes")) : [])
  /** call api */
  const { loading, data, error, refetch } = useAxios({ url: "https://icanhazdadjoke.com/", headers: { Accept: "application/json" } })
  console.log(`Loading: ${loading}\nData: ${data && data.data && data.data.joke}\nError: ${error}`)
  
  useEffect(() => {
    if (data&&data.data) {
      setJoke(data.data.joke) //update joke
      setJokes([...jokes, data.data.joke])  //add joke to jokes array
    }
  }, [data])
  localStorage.setItem("jokes", JSON.stringify(jokes))  //save jokes array data to localStorage

  return (
    <div className={styles.container}>
      <div>
        {loading ? <h1>Loading</h1> : data && !error ? <h1>{joke}</h1> : <h1>Error</h1>}
        <Button onClick={refetch} title="Get A Joke"></Button>
      </div>  
    </div>
    )
}
export default Dashboard;