import {Carousel} from '../controls'
import React, {Component} from 'react';

class CarouselList extends Component{
    state = {
        index:0,
        direction:null
    }
    handleSelect = (selectedIndex, e) => {
        // alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
      }
    render(){
        const { index, direction } = this.state
        const { items = [] } = this.props
        return(
            <Carousel 
                className="customcarousel"
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}>
            {items.map((item) => {
                return (
                  <Carousel.Item>
                    <div >
                    <img width='100%' src={item.image}></img>
                    </div>
                    <Carousel.Caption>
                        <h3>{item.name}</h3>  
                        <p>{item.color} {item.species}</p>
                    </Carousel.Caption>
                  </Carousel.Item>)
              })}
            </Carousel>
        )
    }
}

export default CarouselList;