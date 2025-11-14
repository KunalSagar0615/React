import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './assets/Components/Student.jsx'
import { Product } from './assets/Components/Product.jsx'
import royalEnfield from './assets/bullet.jpeg'


function App() {
  // assumed that this data is coming from backed api
  const students = [
    { mob: "9265175875", name: "Aniket Shinde", role: "Senior Developer", email: "aniket2027@gmail.com", laptop: "HP" },
    { mob: "9265175875", name: "Pawan Wagh", role: "Senior Developer", email: "pawan@gmail.com" },
    { mob: "9265175875", name: "Rutvik Shinde", role: "junior Developer", email: "rutvik@gmail.com",laptop:"ASUS" },
    { mob: "9265175875", name: "Nikhil Sabale", role: "Senior Developer", email: "nikhil@gmail.com" },
    { mob: "9265175875", name: "Shweta Shinde", role: "Senior Developer", email: "shweta@gmail.com" ,laptop:"ASUS" },
    { mob: "9265175875", name: "Asavari Pandit", role: "Senior Developer", email: "asavaripandit@gmail.com" },
  ]

  const product = [
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16", image: royalEnfield },
    { price: "88,589", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" },
    { price: "2,54,508", averageKM: "2025-0km", brand: "Brand New CB350 2025 0kms", place: "ANDHERI WEST,MUMBAI", date: "JUN 16" }
  ]


  return (
    <>
      <div className='flex p-3 gap-5 flex-wrap justify-center'>
        {
          students.map((stud, index) => <Student key={index} name={stud.name} role={stud.role} email={stud.email} mob={stud.mob} laptop={stud.laptop} />)
        }
        
      </div>

      <div className='flex p-3 gap-5 flex-wrap justify-center'>
        {
          product.map(pro => <Product price={pro.price} averageKM={pro.averageKM} brand={pro.brand} place={pro.place} date={pro.date} image={pro.image}/>)
        }
      </div>

      <br /><br />

    </>
  )
}

export default App