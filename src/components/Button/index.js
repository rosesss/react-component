import React, { Component } from 'react';
import './../../assets/styles/_button.scss'
class Button extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            type:'primary',
            text:'',
            className:'',
            size:'',
            icon:'',
            circle:'false',
            // exist
        }
    }
    componentDidMount() {
        this.getType()
    }
    async getType() {
        if(this.props.type === 'primary') {
            await this.setState({
                className:'primarybtn',
                text:this.props.children
            })
        }
        if(this.props.type === 'default'){
            await this.setState({
                className:'defaultbtn',
                text:this.props.children
            })
        }
        if(this.props.circle === 'true') {
            await this.setState({
                className:'circularbtn'
            })
        }
        if(this.props.size === 'big') {
            await this.setState({
                className:'bigbtn'
            })
        }
    }
    render() {

        return (
            <button className={this.state.className}>
                <i className='icon'></i>
                {this.state.text}
            </button>
        );
    }
}

export default Button;