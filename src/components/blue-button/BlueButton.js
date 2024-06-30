import './BlueButton.css';

function BlueButton(props) {
    return (
        <a className="bluebutton" href={props.link}>{props.label}</a>
    )
}

export default BlueButton;