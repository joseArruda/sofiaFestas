import './tabela.css';
import whatsapp from '../../images/whatsapp.svg';
import instagram from '../../images/instagram.svg';

import Logo1 from '../../images/Meu projeto.png';

function Tabela () {
    return(
    <div className='corpo'>
        <div className='tabela-precos'  data-aos="flip-right" data-aos-duration="1500">
            <h1 className='pacote'><img className='logo-infantil2' src={Logo1}/>Pacote Completo</h1>
    <div className='primeira-parte'>
        <div className="decoracao">
            <h2 className='estilo-subtitulo'>Decoração</h2>    
            <p>Mesa tema<br/>
            Painel de fundo<br/>
            Grama/ tapete<br/>
            Maquete<br/>
            Vela(simples)<br/>
            Louças<br/>
            Vasos<br/>
            Flores artificiais<br/>
            Toalhas de mesa (mesa 4 lugares)<br/>
            Centro de mesa<br/>
            LembrancinhasPersonalizados<br/>
            Docinhos tradicionais<br/>
            Balões (Duas bases de balões)<br/>
            Convite digital (simples)</p>
         </div>

         <div className="buffet">
            <h2 className='estilo-subtitulo'>Buffet</h2>
            <p>Salgadinhos assados<br/>
                Salgadinhos fritos<br/>
                Mini pizza<br/>
                Batata frita<br/>
                Cachorro quente<br/>
                Salada de fruta<br/>
                Dimdim<br/>
                Pipoca<br/>
                Mini churrosBolo de copa
            </p>
         </div>
    </div>

    <div className='segunda-parte'>
         <div className="bebidas">
            <h2 className='estilo-subtitulo'>Bebidas</h2>
            <p>Refrigerante primeira linha<br/>
                Suco<br/>
                Água
            </p>
         </div>

         <div className="equipe">
            <h2 className='estilo-subtitulo'>Equipe</h2>
            <p>1 Decoradora<br/>
                1 Fritadeira<br/>
                1 Recepcionista<br/>
                2 Garçons (número de <br/>garçons de acordo com a <br/>quantidade de convidados <br/>contratados)

            </p>
        </div>
    </div>
            <div className="descartavel">
                <h2 className='estilo-subtitulo'>Todo material descartável incluso</h2>
                <p>Pratinhos<br/>
                    Colheres<br/>
                    Copos<br/>
                    Guardanapos
                </p>
            </div>

            <div className="final">
                <p> Valor para temas já disponiveis. Criamos temas novos para pacote a partir de 70 convidados.
                    Evento com 4 horas de duração. Conta como convidados crianças a partir de 5 anos.
                    Caso seja necessário servir bebida alcóolica será cobrado o valor de R$180,00.
                    O garçom contratado fica responsável exclusivamente pela bebida alcoolica e será responsávvel
                    por levar tulipas. Não trabalhamos com reservas! A data fica disponível até assinatura do contrato 
                    e pagamento da primeira parcela. Não fazemos visita ao local, a estrutura do local é de responsabilidade do cliente.
                </p>
            </div>

            <div className='valor'>
                <p>Com direito a 40 convidados <br/> por R$ 3.000,00 + valor do frete. </p>
            </div>
         

         </div>


    </div>
    )
}

export default Tabela;