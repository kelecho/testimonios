import React from 'react'
import '../hojas-de-estilo/Testimonio.css'

export const Testimonio = ( props ) => {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/${props.imagen}.png`)}
        alt='Fotografia de Emma' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{ props.nombre } en { props.pais }</p>
          <p className='cargo-testimonio'>{ props.cargo } en { props.empresa }</p>
          <p className='texto-testimonio'>"{ props.testimonio }"</p>
        </div>
    </div>
  )
}
