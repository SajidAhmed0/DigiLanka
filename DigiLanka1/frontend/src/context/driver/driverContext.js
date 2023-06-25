import { createContext, useReducer } from "react";

export const DriverContext = createContext();

export const driverReducer = (state, action) => {

  switch(action.type) {
    case 'SET_DRIVER':
      return {
        driver: action.payload
      }
    case 'CREATE_DRIVER':
      return {
        driver: [action.payload, ...state.driver]
      }
    case 'DELETE_DRIVER':
      return {
        driver: state.driver.filter((d)=>{return d._id !== action.payload._id})
      }
    case 'UPDATE_DRIVER':
      return {
        driver:[action.payload, ...state.driver.filter((d)=> {return d._id !== action.payload._id})]
      }
      case 'FILTER_DRIVER':
      return {
        driver:[... action.payload.filter((d)=>{
          return d.category.includes(action.filter) == true
        })]
      }
    default:
      return state;
  }
}

export const DriverContextProvider = ({children}) => {

  const [state , dispatch] = useReducer(driverReducer, {
    driver: null 
  });

  return (
    <DriverContext.Provider value={{...state, dispatch}}>
      {children}
    </DriverContext.Provider>
  );
}

