import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import { getAttractions } from './services/attractions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      attractions: [],
    }
  }
  componentWillMount = async () => {
    this.setState({
      attractions: await getAttractions()
    });
  }

  handleSelectAttraction = (id) => () => {
    this.props.history.push(`/attraction/${id}`)
  }

  render() {
    return (
      <div className="wrapper">
      <div className="nav">
          <ul className="navigation">
          <li className="navigation-content" id="lead"><h3>Достопримечательности</h3></li>
            {
              this.state.attractions.map(item => (
                <li key={item.id} onClick={this.handleSelectAttraction(item.id)} className="navigation-content">
                  {item.name}
                </li>
              ))
            }
            </ul>    
        </div>
        <Routes />
      </div>  
    );
  }
}

export default withRouter(App);
