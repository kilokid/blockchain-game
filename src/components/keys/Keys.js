import "./keys.scss";

import grayKey from "../../resources/img/grayKey.svg";
import greenKey from "../../resources/img/greenKey.svg";

const Keys = () => {
    return (
        <div className="keys">
            <img className="keys--1" src={grayKey} alt="Gray key" />
            <img className="keys--2" src={greenKey} alt="Green key" />
            <img className="keys--3" src={greenKey} alt="Green key" />
            <img className="keys--4" src={greenKey} alt="Green key" />
        </div>
    );
}

export default Keys;