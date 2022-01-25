import React from "react";
import ColorListItem from "./ColorListItem";


export default class ColorList extends React.Component {
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

    handleColorChange(index, newColor) {
        const newColors = [
            ...this.state.colors.slice(0, index),
            newColor,
            ...this.state.colors.slice(index + 1),
        ];
        this.setState({ colors: newColors });
    }

    render() {
        const { colors } = this.state;
        return <ul>
            { colors.map((color, index) => <li>
                <ColorListItem
                    color={color}
                    onColorChange={(newColor) => this.handleColorChange(index, newColor)}
                />
            </li>) }
        </ul>
    }
}
