import React from 'react';
import { Component } from 'react';

const formStyle = {
    margin: '40px',
  };

const inputStyle = {
    fontSize: '25px'
}

const buttonStyle = {
    fontSize: '25px',
    background: 'red'
}
class InputForm extends React.Component<{handleSubmit: (event: any) => void}, any> {
    render() {

        return (
            <div>
                <form onSubmit={this.props.handleSubmit} style={formStyle}>
                    <input type="text" name="query" placeholder="Enter zip code" style={inputStyle}></input>
                    <button type="submit" style={buttonStyle}>submit</button>
                </form>
            </div>
        );
    }
}

export default InputForm;