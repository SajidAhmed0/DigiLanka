import { DriverContext } from "../context/driver/driverContext";
import { useContext } from "react";

export const useDriverContext = ()=> {
  const context = useContext(DriverContext);

  if(!context) {
    throw Error('useDriverContext must be used inside an DriverContextProvider');
  }

  return context;
}