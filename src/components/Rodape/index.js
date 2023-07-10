import './rodape.css'
import whatsapp from '../../images/whatsapp.svg';
import instagram from '../../images/instagram.svg';

function Rodape() {
    return(
        <div className="rodape">
            <p className='direitos-rodape' data-aos="fade-up" data-aos-duration="1500">Copyright&copy; 2023 - Sofia Festas. Todos os direitos reservados.<br/> Criado por <span className='meu-nome'>José arruda Vieira Neto </span></p>
            <div className='imagem-rodape'>
            </div>
            <div className='container-redes-rodape'>
            <a href='https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5561996542396&e=AT38j9aigDiidkLuYuY6sIxC5IszLUDGblt_FaJr3W9ZYTffUdi-nZlxp0-HeMA-AfY0TILZzoyPavj9oM4nPE4JM1SInqKE_atfbcv_9DMav1kn6WGM2w#' target='blank'><span className='whatsapp1'>Whatsapp</span><img className='logo-whatsapp' src={whatsapp}></img></a> <br/>
            <a href='https://www.instagram.com/festassofia/' target='blank'><span className='instagram1'>Instagram</span> <img className='logo-instagram' src={instagram}></img></a> <br/>
            <a href='https://instagram.com/sofiafestasadulto?igshid=MzRlODBiNWFlZA== ' target='blank'><span className='instagram1'>Instagram (Adultos)</span> <img className='logo-instagram' src={instagram}></img></a>
            </div>
            
        </div>
    )
}

export default Rodape;