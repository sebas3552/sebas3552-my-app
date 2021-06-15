import React, {Component, Fragment} from "react";
import Button from '@material-ui/core/Button';

export class Ingredient extends Component {
    render() {
        return(
            <Fragment>
                <h5>{this.props.name}</h5>
            </Fragment>
        )
    }
  }

export class Flag extends Component {
    render() {
        return(
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
  }

class Dish extends Component {
  ingredients = ["Tortilla", "Carne", "Cebolla"];

  countIngredients(){
      return this.ingredients.length;
  }

  render() {
      return(
          <div className="dish">
              <h1>{this.props.name}</h1>
              {this.countIngredients()}
              <ul>
                  {this.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <Ingredient keyIndex={index} name={ingredient}></Ingredient>
                      </li>
                  ))}
              </ul>
              <Button variant="contained">Default</Button>
          </div>
      )
  }
}

export default Dish;