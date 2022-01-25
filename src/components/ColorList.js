import React from "react";
import ColorListItem from "./ColorListItem";


export default class ColorList extends React.Component {

    handleColorChange(index, newColor) {
        const newColors = [
            ...this.props.colors.slice(0, index),
            newColor,
            ...this.props.colors.slice(index + 1),
        ];
        this.props.onChange(newColors);
    }

    render() {
        const { colors } = this.props;
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
