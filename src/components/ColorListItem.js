import React from "react";
import PropTypes from "prop-types";

export default class ColorListItem extends React.Component {

    handleChange = (event) => {
        this.props.onColorChange(event.currentTarget.value);
    }

    render() {
        const { color } = this.props;

        return <>
            <label style={{ color: color}}>
                Lorem Ipsum
                <input type='color' value={color} onChange={this.handleChange} />
            </label>
            
        </>;
    }
}

ColorListItem.defaultProps = {
    onColorChange: (_newColor) => {}
}

ColorListItem.propTypes = {
    color: PropTypes.string.isRequired,
    onColorChange: PropTypes.func,
}
