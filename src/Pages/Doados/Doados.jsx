import S from './doados.module.scss'
import livro from '../../assets/livro.png'
import livro2 from '../../assets/livro2.png'
import livro3 from '../../assets/livro3.png'
import axios from 'axios'
import {useState,useEffect} from 'react'


export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
      const response = await axios.get("https://api-t3-oj3n.onrender.com/livros")
      setLivros(response.data)
    }

    useEffect(()=>{
      getLivros()
    },[])


    return(
    <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
       <section className={S.boxBooks}>
           <article>
            <img src={livro} alt="imagem do livro o prota"/>
            <p>O protagonista</p>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </article>
          <article className={S.boxlivro}>
            <img src={livro2} alt="imagem do livro Susssuros na floresta"/>
            <p>Sussuros na Floresa</p>
            <p>Maria Silveira</p>
            <p>Fantasia</p>
          </article>
          <article className={S.boxlivro2}>
            <img src={livro3} alt="imagem do livro O cérebro conectado"/>
            <p>O cérebro conectado</p>
            <p>Renato Miranda</p>
            <p>Educacional</p>
          </article>
          {livros.map((item)=>(
            <article key={item.id}>
            <img src={item.imagem_url} alt='' />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
            </article>
          ))}



        </section>
    </section>
    )
}