import React from 'react'
import MusicEvents from './MusicEvents.jsx'

const MusicEventsData = () => {
  const musicData=[
    {
      "date": "Today",
      "time": "21:00",
      "title": "Swiftageddon - The Taylor Swift Club Night",
      "description": "Swiftageddon is a night dedicated to worshipping at the altar of Taylor Swift: non-stop Swiftly all night: deep cuts, extended mixes, fan favourites...",
      "status": "Sold out!",
      "color": "#FCE4EC"
    },
    {
      "date": "17 December",
      "time": "22:00",
      "title": "Lana Del Rave",
      "description": "Launching the first ever 'Lana Del Rave' at Heaven Nightclub. Join us for a night devoted to the Queen of Alternative as well as favourites from...",
      "status": "Buy a Ticket",
      "color": "#E0F7FA"
    },
    {
      "date": "19 December",
      "time": "18:30",
      "title": "MASSAOKE: XMAS LIVE at the Electric Ballroom",
      "description": "Featuring all your favourite festive hits from WHAM, SLADE, MARIAH, WIZZARD, THE POGUES and many more - as well as hairbrush anthems...",
      "status": "Buy a Ticket",
      "color": "#E0F7FA"
    },
    {
      "date": "22 December",
      "time": "19:00",
      "title": "Eleni Tsaligopoulou full-band",
      "description": "Eleni Tsaligopoulou is one of the most popular and beloved Greek singers with a wide range of repertoire and timeless hits. During her 30 year...",
      "status": "Buy a Ticket",
      "color": "#EDE7F6"
    }
  ]
  
    return (
    <div className='bg-blue-300 p-4 mt-5 rounded-[10px]'>
        <h1 className='text-left font-bold text-2xl mt-5'>Music Events</h1>
        <p className='text-left'>in London, Uited Kingdom</p>
        <div >
            {
                musicData.map( data => <MusicEvents data={data}/>)
            }
        </div>
    </div>
  )
}

export default MusicEventsData