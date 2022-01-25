import React from "react";

export default class NewColor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: '#ffffff',
        }
    }

    handleColorChange = (event) => {
        this.setState({ color: event.currentTarget.value });
    };

    handleNewColorClick = () => {
        this.props.onNewColor(this.state.color);
        this.setState({ color: '#ffffff' });
    };

    render() {
        const { color } = this.state;

        return <div>
            <input type='color' value={color} onChange={this.handleColorChange} />
            <button onClick={this.handleNewColorClick} >Add new color</button>
        </div>
    }
}
