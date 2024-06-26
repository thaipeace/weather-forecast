'use client'

import { FC } from "react"
import Image from 'next/image'

type CurrentCardProps = {
  temp: number,
  tempUnit: string,
  status: string,
  humidity: number,
  winds: number,
  windsDirection: string,
  visibility: number
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

  return (
    <section className="flex flex-col gap-y-3">
      <div>{formatter.format(currentDate)}</div>
      <div className="flex items-center justify-center gap-x-5">
        <div>
          <Image 
            width={100}
            height={100}
            src=''
            alt={status}
          />
        </div>
        <div className="flex flex-col">
          <div>{temp} <sup>&#9900;</sup> {tempUnit}</div>
          <div>{status}</div>
        </div>
      </div>
      <div className="flex gap-x-3 justify-center">
        <div className="flex flex-col items-center justify-center">
          <div>Humidity</div>
          <div>{humidity}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Winds</div>
          <div>{windsDirection} {winds} m/s</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>Visibility</div>
          <div>{visibility} km</div>
        </div>
      </div>
    </section>
  )
}

export default CurrentCard;