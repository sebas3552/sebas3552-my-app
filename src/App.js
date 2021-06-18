import React, {Component} from "react";
import './styles/App.css';
import Header from "./components/header";
import NewDish from "./components/newDish";
import Button from "@material-ui/core/Button";

class App extends Component {
  dish = "tacos";
  dishes = ["Tacos", "Ceviche", "Paella"];

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish />
        {/* <Dish name={this.dish} qty="3" /> */}
        <Button variant="contained" color="secondary" onClick={this.showDishes}>Elegir</Button>
      </div>
    );
  }
}

export default App;
