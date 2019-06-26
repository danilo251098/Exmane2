import React, { Component } from 'react'
import SecondExam from '../../services/SecondExam'

export class Heroes extends Component {

    state = {
        heroes: []
    }

    //Componente tipo clase
    componentDidMount() {
        this.setState({
            heroes: SecondExam.getHeroes()
        });
    }

    render() {
        const heroes = this.state.heroes;
        return (
            <React.Fragment>
                <h1>Perisfericos</h1>
                <hr></hr>
                <div className="card-columns">
                    {/*Tarjeta de los héroes*/}

                    {heroes.map(heroe => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={heroe.img} alt={heroe.nombre} className="card-img-top img-fluid" />
                            <div className="card-body">
                            <h4 className="card-title">{heroe.nombre}</h4>
                            <p className="card-text">{heroe.bio}</p>
                            <p className="card-text">
                                <small className="text-muted">{heroe.aparicion}</small>
                            </p>
                            <button type="button" className="btn btn-outline-primary btn-block">
                                Comprar
                            </button>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Heroes
