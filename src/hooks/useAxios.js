import {useState, useEffect} from 'react'
import defaultAxios from "axios";
/** hook useAxios wrap up the axios: parameter => options(url, header), axiosInstance*/
export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  })
  const [trigger, setTrigger] = useState(0)
  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
  }
  useEffect(() => {
    axiosInstance(options).then(data => {
      console.log("##success")
      setState({
        ...state,
        loading: false,
        data
      })
    }).catch(error => {
      console.log("##error")
        setState({
          ...state,
          loading: false,
          error
        })
      })
  }, [trigger])
  return !options.url ? 'undefine' : { ...state, refetch }
}