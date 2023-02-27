
import BikeRiding from '../../assets/cycling/bike-riding.jpg'


export default function Cycling() {


    return (
         <div className="section cycling">
        <span className="options-anchor" id="cycling"></span>
        <h2 className="title">Cycling</h2>
        <p>Over time I've become more and more invested in cycling. I first used it as a means of getting around London while I studied at university, and loved the freedom it gave me to move around quickly, while also improving my health and reducing my carbon footprint. It grew from there into a passion which has sent me on long distance adventures, alone or with friends, throughout the U.K. and Europe. I train between three and six times a week, and I'm always looking to push myself further. My most recent adventure was a self-supported trip from London to Santiago, covering 2,000 km in 20 days.</p>
        <img className="image" src={BikeRiding} alt="Me on my bike" />
        </div>
   )
}
