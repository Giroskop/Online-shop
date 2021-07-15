import { useState } from "react";

export default function useForm() {

  const [values, setValues] = useState({}) 
  const changeHandler = (e) => {
    setValues(prev => ({...prev, [e?.target?.name]: e?.target?.value}))
  }
  return [values, setValues, changeHandler]
}
