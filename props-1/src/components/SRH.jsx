import React from 'react'

const SRH = () => {
  const data={
      "name": "Sunrisers Hyderabad",
      "shortCode": "SRH",
      "homeGround": "Rajiv Gandhi International Cricket Stadium, Hyderabad",
      "image": "https://example.com/logos/srh.png",
      "imageSize": { "width": 200, "height": 200 },
      "tailwindColor": "bg-orange-500",
      "caption": "Orange Army",
      "titlesWon": 1,
      "shortDescription": "Based in Hyderabad; won their maiden IPL title in 2016 and are known for strong bowling units."
    }

  return (
    <div className='flex justify-center items-center bg-gradient-to-tl  from-blue-500 via-sky-300 to-amber-300 h-[90vh]'>
      <div className='h-[65vh] w-[70vw] rounded-[10px] bg-purple-700'>
        <h1 className='pt-4 text-4xl text-center text-white drop-shadow-lg font-extrabold'>{data.name}</h1>
        <p className='text-lg italic text-center text-white'>{data.caption}</p>
        <div className='flex'>
          <div className='w-1/2 h-[53.5vh] rounded-bl-[10px] flex justify-center items-center bg-purple-500'>
            <img src={data.image} width={data.imageSize.width} height={data.imageSize.height} className="rounded-[50%] border-4 drop-shadow-lg border-purple-900 hover:scale-102 transition-transform duration-500" alt="" />
          </div>
          <div className='w-1/2 p-8 h-[53.5vh] rounded-br-[10px] bg-purple-300 flex justify-center flex-col'>
            <div className='space-y-5'>
              <h1 className='text-lg'><span className='text-purple-700'>Short Code:</span>{' '}{data.shortCode}</h1>
              <h1 className='text-lg'><span className='text-purple-700'>Home Ground:</span>{' '}{data.homeGround}</h1>
              <h1 className='text-lg'><span className='text-purple-700'>Title won:</span>{' '}{data.titlesWon}🏆</h1>
            </div>
            <p className='mt-6 '>{data.shortDescription}</p>
            <button className='bg-purple-700 mt-6 rounded-[20px] px-8 py-2 w-fit text-white'>Explore</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SRH