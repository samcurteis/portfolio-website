import beach from '../../assets/photography/beach.png'
import checkpoint from '../../assets/photography/checkpoint.png'
import colloseum from '../../assets/photography/colloseum.png'
import denmark from '../../assets/photography/denmark.png'
import feria from '../../assets/photography/feria.png'
import galleria from '../../assets/photography/galleria.png'
import gates from '../../assets/photography/gates.png'
import harry from '../../assets/photography/harry.png'
import josie from '../../assets/photography/josie.png'
import lady from '../../assets/photography/lady.png'
import lancaster from '../../assets/photography/lancaster.png'
import london from '../../assets/photography/london.png'
import shop from '../../assets/photography/shop.png'

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import { IconContext } from "react-icons";
import useViewport from '../../hooks/useViewport.js'


export default function Photography() {
const { width } = useViewport();
const breakpoint = 580;

    const images = [
        {
            src: beach,
            location: "London"
        },
        {
            src: checkpoint,
            location: "Rome, Italy"
        },
        {
            src: denmark,
            location: "Denmark"
        },
        {
            src: feria,
            location: "Seville, Spain"
        },
        {
            src: galleria,
            location: "Rome, Italy"
        },
        {
            src: gates,
            location: "Rome, Italy"
        },
        {
            src: harry,
            location: "Denmark"
        },
        {
            src: josie,
            location: "Denmark"
        },
        {
            src: lady,
            location: "Seville, Spain" 
        },
        {
            src: lancaster,
            location: "Lancashire, England"
        },
        {
            src: london,
            location: "London, U.K."
        },
        {
            src: shop,
            location: "Seville, Spain" 
        },
        {
            src: colloseum,
            location: "Rome, Italy"
        },
    ]

    function scrollRight(){
        const photoContainer = document.getElementById("photo-container");
        const photoContainerWidth = photoContainer.offsetWidth;
 photoContainer.scrollLeft += photoContainerWidth
}

    function scrollLeft(){
        const photoContainer = document.getElementById("photo-container");
        const photoContainerWidth = photoContainer.offsetWidth;
 photoContainer.scrollLeft -= photoContainerWidth
}

    return (
         <div className="section photo">
        <span className="options-anchor" id="photo"></span>
        <h2 className="title">Photography</h2>
        <p>I like to go for walks with my film camera, especially when I'm travelling, and take shots of anything I find interesting. Like the screenshots from films, I really enjoy looking at composition and people.</p>
        <IconContext.Provider value={{ className: 'chevrons' }}>
        {width < breakpoint && 
            <div className="mobile-chevrons">
            <BsChevronLeft onClick={scrollLeft} />
        <BsChevronRight onClick={scrollRight} />
            </ div>
        }
        <div className="section-carousel">
        {width > breakpoint && <BsChevronLeft onClick={scrollLeft} />}
        <div className="section-container" id="photo-container">
        <div className="section-scroller">
        {images.map((image) => (
        <div className="image-container" key={image.src}>
        <img src={image.src} alt={image.title} id={image.index} />
            </div>
        ))}
        </div>
        </div>
        {width > breakpoint && <BsChevronRight onClick={scrollRight} />}
        </div>
        </IconContext.Provider>
        </div>
   )
}
