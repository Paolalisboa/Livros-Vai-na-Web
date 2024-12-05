import S from './QueroDoar.module.scss'
import livro from '../../assets/frame.png'


export default function QueroDoar(){
    return(
        <section className={S.principal}>
           <section className={S.container}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
               <form action="">
                <div>
                    <img src={livro} alt="" />
                    <p>Informações do Livro</p>
                </div>
                <input type="text" placeholder='Titulo'/>
                <input type="text" placeholder='Categoria'/>
                <input type="text" placeholder='Autor'/>
                <input type="text" placeholder='Link da Imagem'/>
                <input className= {S.doar} type="submit" value="Doar" />
               </form>
           </section>
        </section>
    )
}