import React from 'react'

const TarjetaSecondExam = ({SecondExam}) => {
    return (
        <div className="card animated fadeIn fast">
        <img src={heroe.img} alt={SecondExam.nombre} className="card-img-top img-fluid" />
        <div className="card-body">
        <h4 className="card-title">{SecondExam.nombre}</h4>
        <p className="card-text">{SecondExam.bio}}</p>
        <p className="card-text">
            <small className="text-muted">{SecondExam.aparicion}}</small>
        </p>
        <button type="button" className="btn btn-outline-primary btn-block">
            Ver más...
        </button>
    </div>
</div>
    )
}

export default TarjetaSecondExam;