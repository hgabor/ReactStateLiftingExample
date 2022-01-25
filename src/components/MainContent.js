import React from "react";
import ColorList from "./ColorList";

export default class MainContent extends React.Component {
    render() {
        return <div>
            <h1>Color list</h1>
            <ColorList />
        </div>
    }
}
