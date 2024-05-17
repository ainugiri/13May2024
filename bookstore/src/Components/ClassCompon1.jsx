import React from "react";


class ClassComp1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    inc = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.inc}>👍</button><span>{this.state.value}!</span>
            </div>
        );
    }
}