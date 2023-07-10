import Inicio10 from '../../images/Img-adultos/Captura de tela 2023-06-23 171540.png';
import Inicio11 from '../../images/Img-adultos/Captura de tela 2023-06-23 171706.png';
import Inicio12 from '../../images/Img-adultos/Captura de tela 2023-06-23 171731.png';
import Inicio13 from '../../images/Img-adultos/Captura de tela 2023-06-27 220037.png';
import Inicio14 from '../../images/Img-adultos/Captura de tela 2023-06-27 220216.png';
import Inicio15 from '../../images/Img-adultos/Captura de tela 2023-06-27 220622.png';
import Inicio16 from '../../images/Img-adultos/Captura de tela 2023-06-27 220709.png';
import Inicio17 from '../../images/Img-adultos/Captura de tela 2023-06-27 220854.png';
import Inicio18 from '../../images/Img-adultos/Captura de tela 2023-06-27 221359.png';
import Inicio19 from '../../images/adulto01.png';
import Inicio21 from '../../images/adulto03.png';
import Inicio22 from '../../images/Img-adultos/Captura de tela 2023-06-29 182050.png';
import Inicio23 from '../../images/Img-adultos/Captura de tela 2023-06-29 181858.png';
import Inicio24 from '../../images/Img-adultos/Captura de tela 2023-06-29 181701.png';


import Logo1 from '../../images/Meu projeto.png';


import './adulto.css';

function Adultos () {
    return(
        <div>
            <div className='informacoes-tela-infantil'  data-aos="flip-up" data-aos-duration="1500">
                <h1 className='titulo-adulto'>Temas adultos<img className='logo-infantil-adulto' src={Logo1}/></h1>
            </div>
            <div className='container text-center centralizar' data-aos="fade-right" data-aos-duration="1500">
            <img className='tela-adulto' src={Inicio10} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio11} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio12} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio13} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio14} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio15} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio16} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio17} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio18} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio19} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio21} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio22} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio23} alt=" Adulto"/>
            <img className='tela-adulto' src={Inicio24} alt=" Adulto"/>
            </div>
        </div>
    )
}

export default Adultos;