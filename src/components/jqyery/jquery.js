import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";


class Gogo extends Component {
    componentDidMount() {
        $("button").click(function() {
            $("h1").toggleClass("red");
        });
    }
    render() {
        return (
            <div className="ff">
                <h1>jquery in React App</h1>
                <button>Click Me</button>
            </div>
        );
    }
}

export default Gogo;
