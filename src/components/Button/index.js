import React, { Component } from 'react';
import './../../assets/styles/_button.scss'
import './../../assets/styles/_icon.scss'
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
            iconClass:''
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
            let arr = []
            arr.push(this.state.className,'circularbtn')
            await this.setState({
                className:arr.join(' ')
            })
        }
        if(this.props.size === 'big') {
            let arr = []
            arr.push(this.state.className,'bigbtn')
            await this.setState({
                className:arr.join(' ')
            })
            
        }
        if(this.props.size === 'small') {
            let arr = []
            arr.push(this.state.className,'smallbtn')
            await this.setState({
                className:arr.join(' ')
            })
        }
        if(this.props.size === 'mini') {
            let arr = []
            arr.push(this.state.className,'minibtn')
            await this.setState({
                className:arr.join(' ')
            })
        }
        if(this.props.icon === 'add') {
            let arr = []
            arr.push('icon','icon-add')
            await this.setState({
                iconClass:arr.join(' ')
            })
        }
        if(this.props.icon === 'talk') {
            let arr = []
            arr.push('icon','icon-talk')
            await this.setState({
                iconClass:arr.join(' ')
            })
        }
    }
    render() {
        return (
            <button className={this.state.className}>
                <i className={this.state.iconClass}></i>
                {this.state.text}
            </button>
        );
    }
}

export default Button;