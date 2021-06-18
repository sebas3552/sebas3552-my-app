import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import './../styles/notFound.css';

class NotFound extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.history.push("/")
      }

  render() {
      return(
          <div id="notFound">
              <h1>Oops, no hemos podido encontrar esta página.</h1>
              <Button variant="contained" color="danger" onClick={this.goBack}>Volver</Button>
          </div>
      )
  }
}

export default NotFound;