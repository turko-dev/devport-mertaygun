"use client"
import {useEffect} from 'react'

export default function Home() {
  useEffect(()=> {
    window.location.href = "/1"

  }, [])
  return(<div></div>)
}