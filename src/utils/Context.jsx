import { View, Text } from 'react-native'
import React,{createContext, useState} from 'react'
export const MyContext=createContext()

export default function Context({children}) {

  const [studentCourses,setStudentCourses]=useState([])
  const [selectedData,setSelectedData]=useState({})

  const values={studentCourses,setStudentCourses,selectedData,setSelectedData}

  return (
    <MyContext.Provider value={values}>
     {children}
    </MyContext.Provider>
  )
}