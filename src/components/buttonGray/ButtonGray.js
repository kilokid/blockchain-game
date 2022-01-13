import "./buttonGray.scss";

const ButtonGray = (props) => {
    return (
        <button className={`button button--gray ${props.class}`}>{props.text}</button>
    );
}

export default ButtonGray;