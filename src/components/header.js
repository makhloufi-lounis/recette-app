
import React, { Component } from 'react'

class Header extends Component {
    
    formatPseudo = (pseudo) => {
        return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`  
     }
    render() {
       
        
        return (
            <header>
                <h1>La boite à recettes {this.formatPseudo(this.props.pseudo)}</h1>
            </header>
        )
    }
}
export default Header;