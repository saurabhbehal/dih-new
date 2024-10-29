import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  data: {
    designId: string
    heading: string
    size: string
    image: string
  }
}

const DesignCard: React.FC<CardProps> = ({ data }) => {
  console.log(data)

  return (
    <Link href={`/interior/${data.designId}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          width={90}
          height={100}
          src={data.image}
          alt={data.heading}
          className="w-full h-40 object-cover"
        />
        <div className="px-6 py-4">
          <div className=" text-gray-700  text-sm mb-2">{data.heading}</div>
          <p className="text-gray-500 text-xs">{data.size}</p>
        </div>
      </div>
    </Link>
  )
}

export default DesignCard
