import {useState,useEffect} from 'react'
import { Button } from '@mui/material'
import {nextButtonStyles} from './nextButton.styles'
export default function NextButton() {
    const [count,setCount]=useState(0)

const handleCount=()=>{
    setCount(count+1)
}
  return (
    <>
    <Button variant="contained" color="primary" onClick={handleCount} sx={nextButtonStyles}>
        Contar {count}
    </Button>
    </>
  )
}
