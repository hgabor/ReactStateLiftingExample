import React from "react";
import ColorList from "./ColorList";
import NewColor from "./NewColor";

export default class MainContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: [
                '#ff0000',
                '#ffff55',
                '#abcdef',
            ],
        }
    }

    handleColorListChange = (newColors) => {
        this.setState({colors: newColors});
    }

    handleNewColor = (newColor) => {
        this.setState({
            colors: [
                ...this.state.colors,
                newColor,
            ],
        });
    }

    render() {
        return <div>
            <h1>Color list</h1>
            <ColorList colors={this.state.colors} onChange={this.handleColorListChange} />
            <NewColor onNewColor={this.handleNewColor} />
        </div>
    }
}
