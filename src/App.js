import React, {Component} from "react";
import './styles/App.css';
import Header from "./components/header";
import NewDish from "./components/newDish";
import Dishes from "./components/dishes";
import data from "./assets/data/dishes.json";

class App extends Component {
  state = {
    dish: "tacos",
    dishes: data
  };

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
        <Dishes data={this.state.dishes}></Dishes>
      </div>
    );
  }
}

export default App;
