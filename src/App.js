import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/header'
import recettes from './recettes';
import Admin from './components/Admin'
import Card from './components/card'

import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }
 
  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ...this.setState.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  modifierRecette = (recetteId, newRecette) => {
    const recettes = { ...this.setState.recettes }
    recettes[recetteId] = newRecette
    this.setState({ recettes })
  }

  supprimerReccete = key => {
    const recettes = { ...this.state.recettes}
    recettes[key] = null
    this.setState({ recettes })
  }

  chargerExemple = () => this.setState({ recettes })

  render () {
    const cards = Object.keys(this.state.recettes)
            .map(key => <Card key={key} details={this.state.recettes[key]} />)

    return (
      <div className='box'>
        <Header pseudo={ this.state.pseudo } />
        <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
          {cards}
        </div>
        <Admin 
          pseudo={this.state.pseudo}
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.modifierRecette}
          supprimerReccete={this.supprimerReccete}
          chargerExemple={this.chargerExemple}
        />
      </div>
    )
  }
}

export default App
