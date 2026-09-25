import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

import data from "@/data.json"

async function getData() {
  const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL

  if (!dbUrl) {
    return data
  }

  try {
    const cleanUrl = dbUrl.endsWith('/') ? dbUrl.slice(0, -1) : dbUrl
    const res = await fetch(`${cleanUrl}/.json`, { cache: 'no-store' })

    if (!res.ok) {
      console.warn(`Failed to fetch data from Firebase (${res.status} ${res.statusText}). Using local data.json fallback.`)
      return data
    }

    return await res.json()
  } catch (error) {
    console.warn("Failed to fetch data from Firebase. Using local data.json fallback.", error)
    return data
  }
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}