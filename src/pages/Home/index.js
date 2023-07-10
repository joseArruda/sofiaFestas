import { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Sobre from '../../components/Sobre';
import Logo from '../../components/Logo';

import Inicio1 from '../../images/crianca01.webp';
import Inicio2 from '../../images/crianca02.webp';
import Inicio3 from '../../images/crianca03.webp';

import Inicio5 from '../../images/adulto01.png';
import Inicio6 from '../../images/adulto02.png';
import Inicio7 from '../../images/adulto03.png';
import Inicio8 from '../../images/adulto04.png';

import Logo1 from '../../images/Meu projeto.png';
import { Button } from 'bootstrap';


function Home () {

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(false);
    }, [])

    if(loading) {
        return(
            <div className='carregando'>
                <h2>Carregando informações</h2>
            </div>
        )
    }


    return(
        <div className='imagens-inicio'>
            <Logo/>
             
            <h1 className='btn titulo-home' data-aos="flip-up" data-aos-duration="1500"><img className='logo-infantil1-home' src={Logo1}/> Temas Infantis <img className='logo-infantil1-home' src={Logo1}/></h1>

            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio1} alt="Tema Sonic"/>
            <Link className='botao-ver-mais' to='/criancas'>Ver mais</Link>
            </div>

            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio2} alt="Tema patrulha canina"/>
            <Link className='botao-ver-mais'  to='/criancas'>Ver mais</Link>
            </div>
            

            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio3} alt="Tema Mulher maravilha"/>
            <Link className='botao-ver-mais'  to='/criancas'>Ver mais</Link>
            </div>
            
            
                <h1 className='btn titulo-home' data-aos="flip-up" data-aos-duration="1050"><img className='logo-infantil1-home' src={Logo1}/> Temas Adultos <img className='logo-infantil1-home' src={Logo1}/></h1>

            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio5} alt="Tema Adulto"/>
            <Link className='botao-ver-mais' to='/adultos'>Ver mais</Link>
            </div>
            
            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio6} alt="Tema Adulto"/>
            <Link className='botao-ver-mais' to='/adultos'>Ver mais</Link>
            </div>
            
            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio7} alt="Tema Adulto"/>
            <Link className='botao-ver-mais' to='/adultos'>Ver mais</Link>
            </div>
            
            <div  data-aos="fade-down" data-aos-duration="1500">
            <img className='temas' src={Inicio8} alt="Tema Adulto"/>
            <Link className='botao-ver-mais' to='/adultos'>Ver mais</Link>
            </div>
            
            


        </div>
    )
}

export default Home;