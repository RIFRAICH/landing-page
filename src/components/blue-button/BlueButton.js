import './BlueButton.css';

function BlueButton(props) {
    return (
        <a className="bluebutton" href={props.link} target="_blank" rel="noreferrer">{props.label}</a>
    )
}

export default BlueButton;