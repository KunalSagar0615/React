import { useState } from 'react'
import wallpaper01 from '../assets/wallpaper-01.jpg'
import wallpaper02 from '../assets/wallpaper-02.jpg'
import wallpaper03 from '../assets/wallpaper-03.jpg'
import wallpaper04 from '../assets/wallpaper-04.jpg'
import wallpaper05 from '../assets/wallpaper-05.jpg'

const Carousel = () => {

    const [wallpapers, setWallpapers] = useState([
        wallpaper01,
        wallpaper02,
        wallpaper03,
        wallpaper04,
        wallpaper05
    ])

    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage == wallpapers.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    const handlePrev = () => {
        if (currentImage == 0) {
            setCurrentImage(wallpapers.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    return (
        <div>
            <button type="button" onClick={handlePrev}>Prev</button>
            <div>
                <img src={wallpapers[currentImage]} alt="" width="400px" />
            </div>
            <button type="button" onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel