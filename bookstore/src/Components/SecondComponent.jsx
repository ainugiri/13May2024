import ThirdComponent from "./ThirdComponent";
function SecondComponent(props) {
    return (
      <div className="SecondComponent">
        <h5>Hi {this.props.name}. Welcome!</h5>
        <ThirdComponent name="" />
      </div>
    );
}

export default SecondComponent;