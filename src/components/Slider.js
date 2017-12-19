import React, { Component } from 'react'
import Carousel from 'react-slick'
import { getAttractionById } from '../services/attractions';

class PrevArrow extends Component {
  render() {
    return <button {...this.props}>Prev</button>
  }
}

class NextArrow extends Component {
  render() {
    return <button {...this.props}>Next</button>
  }
}

const settings = {
  infinite: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: 'slider-wrapper',
};

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      autoplay: true,
    }
  }
  componentWillMount = async () => {
    this.setState({
      attraction: await getAttractionById(this.props.match.params.id),
    })
  }

  handlePause = () => {
    this.setState({
      autoplay: !this.state.autoplay,
    })
  }

  render() {
    settings.autoplay = this.state.autoplay;
    return (
      <div  className="slider">
        <div>
          {
            this.state.attraction ?
              <Carousel {...settings}>
                {this.state.attraction.images.map((image, i) => (
                  <div key={i} >
                    <img src={image} className="slider-image" />
                  </div>
                ))}
              </Carousel>
              : null
          }

        </div>
        <div>
        <button onClick={this.handlePause} className="slider-button">
          <span className="slider-icon">{this.state.autoplay ? '||' : '►'}</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Slider;
