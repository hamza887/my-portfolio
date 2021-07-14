import logo from '../Assets/HZ.png'

export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='container'>
        <a className="navbar-brand logo" href="#">HZ</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>

        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link borderlight" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link borderlight" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link borderlight" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link borderlight" href="#">Contact Me</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
}