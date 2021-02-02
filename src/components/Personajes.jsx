import React from 'react'

const Personajes = () => {
    
    const imagenPersonajes= "https://larepublica.pe/resizer/7cB_vpnxHY-tvBnaZ-xZRFZPoDI=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ONQHIVFLKVAKDKQC5WEQA4MMMI.jpg"
    
    
    return (
        
        <div>
            <div>
                <h1 className="shadow-none p-1 mb-5 bg-light rounded">Personajes</h1>
            </div>
            <div>
                <img src={imagenPersonajes} alt="personajes" width='1200' className='img-thumbnail'/>
            </div>
        </div>    
    )
}

export default Personajes
