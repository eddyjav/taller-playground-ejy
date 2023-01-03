import { NavLink } from "react-router-dom"

const NavBar = () => {

    // let active = {
    //     borderBottomStyle: 'solid'
    // }
    let activeN = {
        textDecoration: "none",
        borderBottomStyle: "none"
    }

    let activeStyle = {
        textDecoration: "none",
        borderBottomStyle: "solid",
      };   

  return (
    <>    
        <nav>
        <div className="container">        
                <ul className="links">
                    <li className="link"> <NavLink to="/"  style={({ isActive }) =>
              isActive ? activeStyle : activeN} > Home </NavLink>  </li>
                    <li className="link"> <NavLink to="imccalc"  style={({ isActive }) =>
              isActive ? activeStyle : activeN}> IMC </NavLink>  </li>
                    <li className="link"> <NavLink to="agecalc"  style={({ isActive }) =>
              isActive ? activeStyle : activeN} > Age </NavLink>  </li>                    
                </ul>

                           
            <NavLink to="/" style={{textDecoration: 'none', color: 'black'}} >
                <div className="container-logo"><div className="imgk">                 
                </div>      
                    <h2> KrugerStar</h2>
                </div> 
            </NavLink>
                    
                             
                <ul className="links">
                    <li className="link"> <NavLink to="/clock"  style={({ isActive }) =>
              isActive ? activeStyle : activeN} > My Clock </NavLink>  </li>
                    <li className="link"> <NavLink to="about"  style={({ isActive }) =>
              isActive ? activeStyle : activeN}> About Me </NavLink>  </li>
                    <li className="link"> <NavLink to="contact"  style={({ isActive }) =>
              isActive ? activeStyle : activeN} > Contact </NavLink>  </li>                    
                </ul>
            </div>
            <hr />  
        </nav>    
        
    </>
  )
}

export default NavBar