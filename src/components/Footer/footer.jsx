import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'


export default function footer(){
    return(
        <footer>
            <section>
                <h3>40002-8922</h3>
                <nav>
                    <a href=""> <img src={facebook} alt="Logo do Facebook" /> </a>
                    <a href=""> <img src={twitter} alt="Logo do Twitter" /> </a>
                    <a href=""> <img src={youtube} alt="Logo do YouTube" /> </a>
                    <a href=""> <img src={linkedin} alt="Logo do Linkedin" /> </a>
                    <a href=""> <img src={instagram} alt="Logo do Instagram" /> </a>
                </nav>
            </section>
            <section>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}