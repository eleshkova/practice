import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAttractionById } from '../services/attractions';

class Attraction extends Component {
  constructor() {
    super();
    this.state = {
      attraction: {},
    }
  }
  componentWillMount() {
    this.getAttraction(this.props.match.params.id);
  }
  componentWillUpdate(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.getAttraction(nextProps.match.params.id);
    }
  }

  getAttraction = async (id) => {
    this.setState({
      attraction: await getAttractionById(id),
    })
  }
  render() {
    return (
      <div className="attraction">
      <Link to={`/attraction/${this.props.match.params.id}/slider`}><img className="attraction-image" src={this.state.attraction.img}/></Link>
        <h1>{this.state.attraction.name}</h1>
        <p className="attraction-info">{this.state.attraction.description}</p>
      </div>
    )
  }
}

export default Attraction;
