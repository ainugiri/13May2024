export default function BtnClick() {
    const clickEvent = () => {
        console.log('Button Clicked');
        alert('Button Clicked');
    }   
    return (
        <div>
            <button onClick={clickEvent}>Click Me</button>
        </div>
    );
}