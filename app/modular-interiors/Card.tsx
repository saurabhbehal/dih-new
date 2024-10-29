// components/Card.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  data: {
    id: number
    heading: string
    smallText: string
    image: string
  }
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    // <Link href={`/design-ideas/${data.slug}`}>
    <Link href="/home-interior-designs/1BHK residence interior designs">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          height={100}
          width={100}
          src={data.image}
          alt={data.heading}
          className="w-full h-40 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.heading}</div>
          <p className="text-gray-700 text-sm">{data.smallText}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
