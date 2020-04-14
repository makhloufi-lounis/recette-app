import React, {Component} from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './adminForm'
class Admin extends Component {
    render () {
        const {recettes, ajouterRecette, majRecette, supprimerReccete, chargerExemple} = this.props
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {
                    Object.keys(recettes)
                    .map(key => <AdminForm 
                        key={ key }
                        id= { key }
                        majRecette={ majRecette }
                        supprimerReccete={ supprimerReccete }
                        recettes={ recettes }
                    ></AdminForm>)
                }
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>
            
        )
    }
}

export default Admin