import React from 'react'

const NavBar = () => {
  
  
    const estilos = {
        border: 'solid red 1px',
        color: 'blue'
    }
    
    
    return (
    <div>
        <li style={estilos}><a href='#'>Inicio</a></li>
        <li style={{color: 'red'}}><a href='#'>Productos</a></li>
        <li><a href='#'>Contacto</a></li>
        <li><a href='#'>Otros Servicios</a></li>
    </div>
  )
}

export default NavBar