import React, { Component } from 'react';
import Ball from './images/ball.svg';
import Bone from './images/bone.svg';
import Paw from './images/paw.svg';
import '../Animation/style.css';

class Item extends Component {
  state = {
    style: {
      transform: `translate(${this.props.from[0]}px, ${
        this.props.from[1]
      }px) rotate(${Math.random() * 360}deg)`
    }
  };

  componentDidMount() {
    setTimeout(this.setStyle, 1);
  }

  setStyle = () => {
    const movingStyle = `translate(${Math.random() *
      window.innerHeight *
      2}px, ${Math.random() * window.innerWidth * 2}px) rotate(${Math.random() *
      360}deg)`;
    const time = this.props.time ? this.props.time : 20;
    const size = this.props.size ? this.props.size : '150px';
    const style = {
      position: 'absolute',
      zIndex: '-1',
      transform: movingStyle,
      transition: `transform ${time}s ease-out`,
      MsTransform: movingStyle,
      MsTransition: `transform ${time}s ease-out`,
      Webkitransform: movingStyle,
      WebkitTransition: `transform ${time}s ease-out`,
      overflow: 'visible',
      willChange: 'transform'
    };
    const imgSize = {
      width: size,
      height: 'auto'
    };
    this.setState({
      style: style,
      size: imgSize
    });
    setTimeout(this.setStyle, time * 1000);
  };

  render() {
    const { style, size } = this.state;

    return (
      <div style={style} id="animation-style">
        <img style={size} src={Ball} alt="img" />
        <img style={size} src={Paw} alt="img" />
        <img style={size} src={Bone} alt="img" />
      </div>
    );
  }
}

class Sky extends Component {
  state = { moves: [] };

  componentDidMount() {
    const many = this.props.how;
    const temp_moves = [];

    for (let i = 0; i < many; i++) temp_moves.push(this.movement());

    this.setState({ moves: temp_moves });
  }

  movement = () => {
    const rotation = Math.floor((Math.round(Math.random()) * 2 - 1) * 600);
    const fromX = Math.floor(Math.random() * window.innerWidth);
    const fromY = Math.floor(Math.random() * window.innerHeight * 1.5);
    const toX = Math.floor(
      Math.random() * window.innerWidth * (Math.round(Math.random()) * 2 - 1)
    );
    const toY = Math.floor(
      Math.random() *
        window.innerHeight *
        1.5 *
        (Math.round(Math.random()) * 2 - 1)
    );
    const temp = {
      rotation,
      fromX,
      fromY,
      toX,
      toY
    };
    return temp;
  };

  render() {
    const items = this.props.images;
    const outerStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '1000px',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      zIndex: '-1'
    };

    return (
      <div style={outerStyle} id="sky">
        {this.state.moves.map((e, i) => {
          const conditional = Math.floor(
            Math.random() * Object.keys(items).length
          );

          return (
            <Item
              what={items[conditional]}
              from={[e.fromX, e.fromY]}
              to={[e.toX, e.toY]}
              rotation={e.rotation}
              size={this.props.size}
              time={this.props.time}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

class Animation extends React.Component {
  state = {
    mode: 'pets',
    background: '#2F3939',
    how: 100
  };

  handleClick = e => {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      background: e.target.attributes.background.value
    });
  };

  render() {
    const { mode, background, how } = this.state;
    const modes = { pets: {} };
    return (
      <>
        <div className="Animation">
          <Sky
            images={modes[mode]}
            how={how}
            size={'50px'}
            time={30}
            background={background}
          />{' '}
        </div>
      </>
    );
  }
}

export default Animation;
