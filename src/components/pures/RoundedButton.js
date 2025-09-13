import styles from "../../styles/components/RoundedButton.module.scss";

const RoundedButton = ({
  text,
  buttonColor,
  textColor,
  icon = null,
  action = () => {},
  type = "button",
  disabled = false,
  className = "",
}) => (
  <button
    className={`${styles.buttonContainer} ${className}`}
    style={{ backgroundColor: buttonColor, color: textColor }}
    onClick={action}
    type={type}
    disabled={disabled}
  >
    {text}
    {icon && icon}
  </button>
);

export default RoundedButton;
