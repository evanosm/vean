"use client"

import useSWR from 'swr'
import { useEffect } from 'react';

export default function Page({ params }: { params: any }) {
  const fetcher = (url: string) => fetch(url, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
    },
  }).then((res) => res.json())
  const { data, error } = useSWR(`https://api.vean.fr/projects/${params.id}`, fetcher)
  
  useEffect(() => {
    console.log(data)
  }, [data])

  if (error) return <div>failed to load : {error.message}</div>
  if (!data) return <div>loading...</div>

  return (
    <div>CC</div>
  )
}