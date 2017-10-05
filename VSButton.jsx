import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VSButton extends Component {
  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);
    this.toggleActive = this.toggleActive.bind(this);

    this.state = {
      hover: false,
      active: false,
    };
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  backgroundColorState() {
    if (this.state.active) {
      return '#DE5E02';
    } else if (this.state.hover) {
      return '#FD8835';
    } else if (this.props.disabled) {
      return 'rgba(0, 0, 0, 0.12)';
    } else if (this.props.color) {
      return this.props.color;
    }

    return '#FA6B03';
  }

  sizeState() {
    if (this.props.size === 'large') {
      return '133px';
    } else if (this.props.size === 'medium') {
      return '77px';
    }

    return '21px';
  }

  render() {
    const style = {
      backgroundColor: this.backgroundColorState(),
      color: this.props.disabled ? '#000' : '#fff',
      textTransform: 'uppercase',
      border: 'none',
      padding: `15px ${this.sizeState()}`,
      borderRadius: '4px',
      fontSize: '16px',
      fontFamily: 'IntCircularProBook',
      WebkitFontSmoothing: 'antialiased',
      cursor: 'pointer',
    };

    return (
      <button
        style={style}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onMouseDown={this.toggleActive}
        onMouseUp={this.toggleActive}
      >
        {this.props.text}
      </button>
    );
  }
}

VSButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

export default VSButton;
