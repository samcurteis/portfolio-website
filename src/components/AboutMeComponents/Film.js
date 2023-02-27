import amour from '../../assets/film-screenshots/amour.png'
import cleo from '../../assets/film-screenshots/cleo.png'
import elevator from '../../assets/film-screenshots/elevator.png'
import maman from '../../assets/film-screenshots/maman.png'
import medea from '../../assets/film-screenshots/medea.png'
import oncle from '../../assets/film-screenshots/oncle.png'
import orlando from '../../assets/film-screenshots/orlando.png'
import stalker from '../../assets/film-screenshots/stalker.png'
import succession from '../../assets/film-screenshots/succession.png'
import tiffany from '../../assets/film-screenshots/tiffany.png'
import titane from '../../assets/film-screenshots/titane.png'
import atlanta from '../../assets/film-screenshots/atlanta.png'
import squid from '../../assets/film-screenshots/squid.png'

import useViewport from '../../hooks/useViewport.js'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import { IconContext } from "react-icons";


export default function Film() {
const { width } = useViewport();
const breakpoint = 580;

    const images = [
        {
            src: amour,
            title: "L'Amour",
            director: "Michael Haneke"
        },
        {
            src: cleo,
            title: "Cleo from 5 to 7",
            director: "Agnes Varda"
        },
        {
            src: elevator,
            title: "Elevator to the Gallows",
            director: "Louis Malle"
        },
        {
            src: maman,
            title: "Petite Maman",
            director: "Celine Schiamma"
        },
        {
            src: medea,
            title: "Medea",
            director: "Pier Paolo Pasolini"
        },
        {
            src: oncle,
            title: "Mon Oncle D'Amerique",
            director: "Alain Resnais"
        },
        {
            src: orlando,
            title: "Orlando",
            director: "Sally Potter"
        },
        {
            src: stalker,
            title: "Stalker",
            director: "Andrey Tarkovsky"
        },
        {
            src: succession,
            title: "Succession",
            director: null
        },
        {
            src: tiffany,
            title: "Breakfast at Tiffany's",
            director: "Blake Edwards"
        },
        {
            src: titane,
            title: "Titane",
            director: "Julia Ducournau"
        },
        {
            src: atlanta,
            title: "Atlanta",
            director: null
        },
        {
            src: squid,
            title: "Squid Game",
            director: null
        },
    ]

    function scrollRight(){
        const filmContainer = document.getElementById("film-container");
        const filmContainerWidth = filmContainer.offsetWidth;
 filmContainer.scrollLeft += filmContainerWidth
}

    function scrollLeft(){
        const filmContainer = document.getElementById("film-container");
        const filmContainerWidth = filmContainer.offsetWidth;
 filmContainer.scrollLeft -= filmContainerWidth
}

    return (
         <div className="section film">
        <span className="options-anchor" id="film"></span>
        <h2 className="title">Film</h2>
        <p>Film is one of my favourite art forms, as there are so many aspects to it that can be great, whether that's the acting, the script, the sound or the cinematography. With my interest in photography, and inspired by a film YouTube channel called 'Every Frame a Painting', when I can I like to take a screenshot of the films I watch if I come across a frame I like. Here are some of my favourites.</p>
        <IconContext.Provider value={{ className: 'chevrons' }}>
        {width < breakpoint && 
            <div className="mobile-chevrons">
            <BsChevronLeft onClick={scrollLeft} />
        <BsChevronRight onClick={scrollRight} />
            </ div>
        }
        <div className="section-carousel">
        {width > breakpoint && <BsChevronLeft onClick={scrollLeft} />}
        <div id="film-container" className="section-container">
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
