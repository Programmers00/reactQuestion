import {useState, useEffect} from 'react'
import defaultAxios from "axios";
/** hook useAxios wrap up the axios: parameter => options(url, header), axiosInstance*/
export const useAxios = (options, axiosInstance = defaultAxios) => {
  // state for loading, data, error
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  })
  // trigger for refetch
  const [trigger, setTrigger] = useState(0)
  /** refetch: re-call  */
  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now()) // trigger!
  }
  /** call api when trigger */
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