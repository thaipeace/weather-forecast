'use client'

import { FC } from "react"
import Image from 'next/image'

type CurrentCardProps = {
  temp: number,
  tempUnit: string,
  status: string,
  humidity: string,
  winds: string,
  windsDirection: string,
  visibility: string
}

const CurrentCard: FC<CurrentCardProps> = ({
  temp,
  tempUnit,
  status,
  humidity,
  winds,
  windsDirection,
  visibility
}: CurrentCardProps) => {
  const currentDate = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit', year: 'numeric' });
  const items = [
    { name: 'Humidity', data: humidity },
    { name: 'Winds', data: windsDirection + winds },
    { name: 'Visibility', data: visibility }
  ]

  const WeatherItems = ({
    name,
    data 
  }: { name: string, data: string | number }) => {
    return (
      <div className="flex flex-col gap-y-1 items-center justify-center">
        <div className="text-gray-500">{name}</div>
        <div className="font-bold">{data}</div>
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-y-3 p-3 bg-white rounded-lg">
      <div>{formatter.format(currentDate)}</div>
      <div className="flex items-center justify-center">
        <div className="px-4">
          <Image 
            width={100}
            height={100}
            src='/vercel.svg'
            alt={status}
          />
        </div>
        <div className="flex flex-col items-center px-4">
          <div className="text-4xl font-medium">{temp}<sup>&#9900;</sup>{tempUnit}</div>
          <div>{status}</div>
        </div>
      </div>
      <div className="flex gap-x-6 justify-center text-xs">
        { items.map(({name, data}) => <WeatherItems key={name} name={name} data={data} />) }
      </div>
    </section>
  )
}

export default CurrentCard;