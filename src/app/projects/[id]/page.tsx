"use client"

export default function Page({ params }: { params: any }) {

  console.log(params);

  return (
    <div>{params.id}</div>
  )
}
