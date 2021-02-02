import React from 'react'

const Episodios = () => {
    
    const imagenEpisodios = 'https://cdn.lanetaneta.com/wp-content/uploads/2019/10/Rick-y-Morty-los-10-mejores-episodios-hasta-ahora-seg%C3%BAn-780x405.jpg'
    
    return (
        <div>
            <div>
            <h1 className='shadow-none p-1 mb-5 bg-light rounded'>Episodios</h1>
            </div>
            <div>
                <img src={imagenEpisodios} alt="episodios" width='1200' className='img-thumbnail'/>
            </div>
        </div>    
    )
}

export default Episodios
