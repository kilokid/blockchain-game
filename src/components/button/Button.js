import './button.scss';

const Button = (props) => {
    return (
        <button className={`button ${props.class}`}>{props.text}</button>
    );
}

export default Button;