import {  useReducer } from "react";
import { Alert } from "react-native";

const reducer = (state, actions) => {
  switch (actions.type) {
    case "SET_DATA":
      return { ...state, data: actions.data };
    case "SET_ERROR":
      return { ...state, error: actions.error };
    case "SET_LOADING":
      return { ...state, loading: actions.loading };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: actions.errorMessage };
    default:
      return state;
  }
}
export default useApi = (apiFunc) => {

  const [state, dispatch] = useReducer(reducer,
    {
      data: [],
      error: false,
      loading: false,
      errorMessage: ""
    }
  )

  const request = async (...args) => {
    dispatch({ type: "SET_LOADING", loading: true })
    dispatch({ type: 'SET_DATA', data: [] })
    dispatch({ type: 'SET_ERROR_MESSAGE', errorMessage: "" })


    const response = await apiFunc(...args);
    dispatch({ type: "SET_LOADING", loading: false })

    if (!response.ok) {
      dispatch({ type: 'SET_ERROR_MESSAGE', errorMessage: response.data?.error || 'An error occurred' })      
      return dispatch({ type: 'SET_ERROR', error: true });
    }
    dispatch({ type: 'SET_ERROR', error: false });
    return dispatch({ type: 'SET_DATA', data: response.data });
  };

  return {
    request,
    data: state.data,
    loading: state.loading,
    error: state.error,
    errorMessage: state.errorMessage,
    setData: (newData) => {
      dispatch({ type: 'SET_DATA', data: newData })
    },
    setLoading: (isLoading) => {
      dispatch({ type: 'SET_LOADING', loading: isLoading })
    }
  }
};