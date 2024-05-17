import React, {Component} from 'react'; 

class TitleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

        this.updateState = this.updateState.bind(this);

    }

    updateState() {
        console.log("Updating the count Value");
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <h1>Hi. Welcome!</h1>
                
                <button onClick={this.updateState}>👍</button> <span>{this.state.count}</span>
            </div>
        );
    }
}   

export default TitleComponent;