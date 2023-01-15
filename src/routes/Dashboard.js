import {useState, useEffect} from 'react'
// css
import styles from '../style/dashboard.module.css'
// custom hooks
import { useAxios } from '../hooks/useAxios'
// components
import Button from '../componenents/Button'

function Dashboard() {
  /** data */
  const [joke, setJoke] = useState("")
  /** call api */
  const { loading, data, error, refetch } = useAxios({ url: "https://icanhazdadjoke.com/", headers: { Accept: "application/json" } })
  console.log(`Loading: ${loading}\nData: ${data&&data.data&&data.data.joke})}\nError: ${error}`)
  useEffect(() => {
    if (data&&data.data) {
        setJoke(data.data.joke)  
    }
  }, [data])
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