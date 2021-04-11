import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar navbar-expand-lg bg-light navbar-light">
            <span className="navbar-brand text-dark font-weight-bold py-3">Tudás<kbd className="bg-success p-1 ml-1">ON</kbd></span>
            <button className="navbar-toggler border-0 p-1" type="button" data-toggle="collapse" data-target="#csukott">
                    <span className="navbar-toggler-icon custom-toggler"></span>
            </button>
            <div className="collapse navbar-collapse" id="csukott">
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-dark mx-2" to='/cikk'><span className="nav-text">Cikkek</span></Link>
                    </li>
                    <li className="nav-item">
                        {props.adatok.perm_article === 1 ? <Link className="nav-link text-dark mx-2" to='/cikkadd'><span className="nav-text">Cikk hozzáadása</span></Link> : <span></span>}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark mx-2" to='/forum'><span className="nav-text">Fórum</span></Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        {props.adatok.user_name === undefined ? <Link className="nav-link text-dark mx-2" to='/log'><span className="nav-text">Belépés/Regisztráció</span></Link> : <span className="nav-link text-dark mx-2"><i class="fa fa-user pr-2" aria-hidden="true"></i>{props.adatok.user_name}</span>}
                    </li>
                    <li className="nav-item">
                        {props.adatok.perm_admin === 1 ? <Link className="nav-link text-dark mx-2" to='/admin'><span className="nav-text">Admin felület</span></Link> : <span></span>}
                    </li>
                    <li className="nav-item">
                        {props.adatok.user_name === undefined ? <span></span> : <a className="nav-link text-dark mx-2" href="/nodejs/exit"><span className="nav-text"><i class="fa fa-sign-out" aria-hidden="true"></i></span></a>}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark mx-2" to='/download'><span className="nav-text"><i class="fa fa-download" aria-hidden="true"></i></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark mx-2" to='/help'><span className="nav-text"><i class="fa fa-question-circle" aria-hidden="true"></i></span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;