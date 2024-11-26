import S from './inicio.module.scss'
import read from'../../assets/read.png'
import network from'../../assets/network.png'
import balance from '../../assets/balance.png'
import transform from '../../assets/transform.png'


export default function Inicio(){
    return (
        <main>
        <section>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
        </section>
        <section className={S.devodoar}>
            <div>
                <h2>Por que devo doar? </h2>
            </div>
            <section className={S.boxCard}>
                <article>
                    <img src={network} alt="Imagem de quatro bonecos, representando pessoas." />
                    <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article>
                    <img src={read} alt="Imagem de uma pessoa lendo" />
                    <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </article>
                <article>
                    <img src={transform} alt="Imagem de uma mão e pessoas, transmitindo força" />
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article>
                <article>
                    <img src={balance} alt="Imagem de uma balança com dois pratos" />
                    <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </article>
            </section>
        </section>
        </main>
    )
}