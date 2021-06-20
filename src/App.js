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

  updateDish = (index, updatedName) => {
    let newState = {...this.state};
    newState.dishes.dishes[index].name = updatedName;

    this.setState(newState);
  }

  addDish = (dishName) => {
    let newState = {...this.state};
    const newDish = {
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "México",
      ingredients: ["Semillas", "Pollo", "Arroz"]
    };
    newState.dishes.dishes.push(newDish);

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish onAddDish={this.addDish} />
        {/* <Dish name={this.dish} qty="3" /> */}
        <Dishes data={this.state.dishes} onUpdateDish={this.updateDish}></Dishes>
      </div>
    );
  }
}

export default App;
