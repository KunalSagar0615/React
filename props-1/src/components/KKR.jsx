import React from 'react'

const Kkr = () => {
    const data = {
        "name": "Kolkata Knight Riders",
        "shortCode": "KKR",
        "homeGround": "Eden Gardens, Kolkata",
        "image": "https://tse2.mm.bing.net/th/id/OIP.1HkNRKMXIy3FnQ5OH2f_uQHaHa?pid=Api&P=0&h=180",
        "imageSize": { "width": 200, "height": 200 },
        "tailwindColor": "bg-purple-700",
        "caption": "Korbo Lorbo Jeetbo",
        "titlesWon": 3,
        "shortDescription": "Owned by Red Chillies Entertainment and others; strong fanbase and multiple title wins (including 2024)."
    }

    return (
        <div className='flex justify-center items-center bg-gradient-to-tl from-blue-400 via-blue-200 to-blue-500 h-[90vh]'>
            <div className='h-[65vh] w-[70vw] rounded-[10px] bg-purple-700'>
                <h1 className='pt-4 text-4xl text-center text-white drop-shadow-lg font-extrabold'>{data.name}</h1>
                <p className='text-lg italic text-center text-white'>{data.caption}</p>
                <div className='flex'>
                    <div className='w-1/2 h-[53.5vh] rounded-bl-[10px] flex justify-center items-center bg-purple-500'>
                        <img src={data.image} width={data.imageSize.width} height={data.imageSize.height} className="rounded-[50%] border-4 drop-shadow-lg border-purple-900 hover:scale-110 transition-transform duration-600" alt="" />
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

export default Kkr