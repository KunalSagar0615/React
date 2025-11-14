import React from 'react'
import Holiday from './Holiday.jsx'

const data = () => {
    const response = [
        {
            "title": "Maharajas' Express",
            "description": "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an 'Experience Unsurpassed'. It has been a winner of 'World’s Leading Luxury train' by World Travel Awards consecutively for last six years.",
            "image": "maharajas-express.jpg",
            "linkText": "Read More",
            "link": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQXdxuJQJZv_xi9Zcp63uxPDPGCmPQtRS_uzBHOJ-LY4jKOdiH"
        },
        {
            "title": "International Packages",
            "description": "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
            "image": "international-packages.jpg",
            "linkText": "Read More",
            "link": "https://dummyticketvisa.com/TourPackage/imgtrain/Thailand.jpg"
        },
        {
            "title": "Domestic Air Packages",
            "description": "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
            "image": "domestic-air-packages.jpg",
            "linkText": "Read More",
            "link": "https://dummyticketvisa.com/TourPackage/imgtrain/Kashmir.jpg"
        }
    ]

    return (
        <div>
            <h1 className='font-bold mb-5 text-xl '>Holidays</h1>
            <section className='flex gap-5'>
                {
                    response.map(data => <Holiday data={data} />)
                }
            </section>
        </div>
    )
}

export default data
