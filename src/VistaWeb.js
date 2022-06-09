import React from 'react'

const VistaWeb = ({poema}) => {
  return (
    <div style={{display: "flex",flexDirection: "column", justifyContent:"center", alignItenms:"center"}}>
      <h1 style={{color: "#3388af", fontSize:"42px"}}>  {poema ? poema.title : " "} </h1>
      <p>  Por {poema ? poema.poet.name : " "} </p>
      <img src="https://picsum.photos/600/400" alt="Imagen Random" style={{maxWidth:"600px", maxHeigth:"400"}}></img>
      <p style={{color:"#3388af"}}>   {poema ? poema.content : " "} </p>
    </div>
  )
}

export default VistaWeb;