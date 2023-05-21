import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import DetailsScreen from '../components/DetailsScreen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-hidden">        <div className="h-full bg-gray-900"><DetailsScreen /></div></div>


    </>
  )
}
