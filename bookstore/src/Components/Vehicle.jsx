function Car() {
  return <h2>Car</h2>;
}   
function Bike(props) {
    return(
        <>
        <h2>Bike</h2>
        <h5>The Bike is {props.name}</h5>
        </>
    )
}
function Bus(){
    return <h2>Bus</h2>;
}
export {Car, Bike, Bus};