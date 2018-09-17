import React, { Component } from 'react';
import './../../assets/styles/_icon.scss'
import './../../assets/styles/_button.scss'
import PropTypes from 'prop-types';
class Button extends Component {
    render() {
        let className = ''     
        let defaultClass = 'newbtn'   
        let icon = 'icon' + ' ' + 'icon-' + this.props.icon
        className = defaultClass + ' ' + this.props.type+ ' ' + this.props.size + ' ' + this.props.circle
        return (
            <button className={className} onClick={this.props.onClick}>
                <i className={icon}></i>
                {this.props.children}
            </button>
        );
    }
}
Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'default','gradient']),
    size: PropTypes.oneOf(['mini', 'small','big']),
    circle: PropTypes.bool,
    icon: PropTypes.string
}
Button.defaultProps = {
    type: 'primary',
    size: 'mini',
    circle: false,
    icon: 'icon'
}

export default Button;