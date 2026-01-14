import { useState } from "react"
import image1 from "./assets/slider-image-1-large.jpg"
import image2 from "./assets/slider-image-2-large.jpg"
import image3 from "./assets/slider-image-3-large.jpg"
import image4 from "./assets/slider-image-4-large.jpg"
import image5 from "./assets/slider-image-5-large.jpg"

import imageS1 from "./assets/slider-image-1-small.jpg"
import imageS2 from "./assets/slider-image-2-small.jpg"
import imageS3 from "./assets/slider-image-3-small.jpg"
import imageS4 from "./assets/slider-image-4-small.jpg"
import imageS5 from "./assets/slider-image-5-small.jpg"

const About = () => {
    
    const [currentImage, setCurrentImage] = useState(0);
    
    const images = [image1, image2, image3, image4, image5];
    const imagesSmall = [imageS1, imageS2, imageS3, imageS4, imageS5];

    const handleNextImage = () =>{
        if(images.length - 1 ==  currentImage){
            setCurrentImage(0)
        }else{
            setCurrentImage(currentImage + 1)
        }
    }
    
    const handlePrevImage = () =>{
        if(currentImage == 0){
            setCurrentImage(images.length - 1)
        }else{
            setCurrentImage(currentImage - 1)
        }
    }

    return (
        <>
            <div className="text-center my-10 p-3">
                <img src={images[currentImage]} alt="" className="w-full rounded-2xl " />
            </div>

            <div className="flex justify-between text-center mx-10 gap-5">
                <button type="button" className="bg-slate-400 p-3 rounded-2xl cursor-pointer text-2xl" onClick={handlePrevImage}>Prev</button>

                <button type="button" className="bg-slate-400 p-3 rounded-2xl cursor-pointer text-2xl" onClick={handleNextImage}>Next</button>
            </div>
        </>
    )
}

export default About