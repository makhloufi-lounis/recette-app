import React, { Component } from 'react'

class AdminForm extends Component {

    handelChange = (event, key) => {
        const {name, value} = event.target
        const recette = this.props.recettes[key]
        recette[name] = value
        this.props.majRecette(key, recette)
    }
    render () {
        const {id : key, recettes} = this.props
        const recette = recettes[key]
        return (
            <div className='card'>
                <form className='admin-form'>
                <input onChange={event => this.handelChange(event, key)}
                        value={recette.nom}                       
                        type='text' 
                        name='nom' 
                        placeholder="Nom de la recette" />
                    <input onChange={event => this.handelChange(event, key)}
                        value={recette.image}
                        type='text' 
                        name='image' 
                        placeholder="Nom de l'image" />
                    <textarea onChange={event => this.handelChange(event, key)}
                        value={recette.ingredients}
                        name='ingrediens' 
                        rows='3' 
                        placeholder='Liste des ingredients avec des virgules' />
                    <textarea onChange={event => this.handelChange(event, key)}
                        value={recette.instructions}
                        name='instructions' 
                        rows='15' 
                        placeholder='Liste des instructions avec des retoure a la ligne' />
                </form>
                <button onClick={() => this.props.supprimerReccete(key)}>Supprimer</button>
            </div>
        )
    }
}

export default AdminForm