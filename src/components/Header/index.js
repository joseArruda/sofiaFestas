import './header.css';
import { Link } from 'react-router-dom';

import Logo1 from '../../images/Meu projeto.png';

function Header () {
    return(

            <header class="header conteiner-fluid"> 
                <nav className='barra-navegacao navbar-expand-lg navbar-dark bg-transparent'>
                    <div className='container-fluid container-cabecalho'>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div className='collapse navbar-collapse' id="navbarNav">
                            <ul class="navbar-nav"> 
                                <li class="nav-item"><Link className='logo nav-link active' to="/" id="navItem"><img className='logo-infantil1' src={Logo1}/>Sofia Festas</Link></li>
                                <li class="nav-item"><Link className='elementos-header nav-link active' to="/adultos" id="navItem">Adulto</Link></li>
                                <li class="nav-item"><Link className='elementos-header nav-link active' to="/criancas" id="navItem">Infantil</Link></li>
                                <li class="nav-item"><Link className='elementos-header nav-link active' to="/tabela" id="navItem">Tabela de preços</Link></li>
                                <li class="nav-item"><Link className='elementos-header nav-link active' to="/contato" id="navItem">Entre em contato</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    
    )
}

export default Header;