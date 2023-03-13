import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: this.props.begin,
            step: this.props.step
           
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {
                    this.setState({
                        val: this.state.val + this.state.step
                    })
                }}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}