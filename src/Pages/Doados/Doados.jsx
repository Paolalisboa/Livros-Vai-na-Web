import S from './doados.module.scss'
import livro from '../../assets/livro.png'

export default function Doados(){
    return(
    <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
       <section className={S.boxBooks}>
           <article>
            <img src={livro} alt="imagem do livro o prota"/>
            <h4>O protagonista</h4>
            <h5>Susanne Andrade</h5>
            <h5>Ficção</h5>
          </article>
          {/* <div className={S.box}>
            <img src={livro} alt="" />
            <h4>O protagonista</h4>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div> */}
        </section>
    </section>
    )
}