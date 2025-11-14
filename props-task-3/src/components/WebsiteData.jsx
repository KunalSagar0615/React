import React from 'react'
import Website from './Website.jsx'
import { FaShoppingCart } from "react-icons/fa";
import { SiGooglecloudstorage } from "react-icons/si";
import { MdStorage } from "react-icons/md";
import { BsMouseFill } from "react-icons/bs";
import { AiFillBook } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";

const WebsiteData = () => {

    const features = [
    {
      "title": "E-commerce Features",
      "description": "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store.",
      "link": "Learn more",
      "icons":<FaShoppingCart />
    },
    {
      "title": "Disk Space",
      "description": "The amount of storage space provided for your website files, emails, databases, etc.",
      "link": "Learn more",
      "icons":<SiGooglecloudstorage/>
    },
    {
      "title": "Server Location",
      "description": "The physical location of the server hosting your website, which can affect page load times and SEO.",
      "link": "Learn more",
      "icons":<MdStorage/>
    },
    {
      "title": "One-Click Installers",
      "description": "Tools like Softaculous or Fantastico that simplify the installation of popular web applications like WordPress, Joomla, or Drupal.",
      "link": "Learn more",
      "icons":<BsMouseFill/>
    },
    {
      "title": "Script Support",
      "description": "Support for programming languages and scripts such as PHP, Python, Perl, and Ruby on Rails.",
      "link": "Learn more",
      "icons":<AiFillBook/>
    },
    {
      "title": "Domain Hosting",
      "description": "The ability to host one or more domain names on the same hosting account.",
      "link": "Learn more",
      "icons":<AiOutlineCreditCard/>
    }
  ]


  return (
    <>
    <h6 className='text-xl mt-5' style={{color:'purple'}}>Features</h6>
    <h1 className='text-5xl text-bold hover:text-purple-600 transition-transform hover:scale-100'>Our Web Hosting Features</h1> 
    <div className='mt-5 text-left'>
        <div className=' w-30px  grid grid-cols-3 gap-20'>
            {
                features.map(data => <Website data={data}/> )
            }
        </div>
    </div>
    </>
  )
}

export default WebsiteData