import "./cellKey.scss";

import cell from '../../resources/img/cell.png';
import greenKey from '../../resources/img/greenKey.svg';

const CellKey = () => {
    return (
        <div className="cellKey">
            <img className="cellKey__cell" src={cell} alt="cell" />
            <img className="cellKey__key" src={greenKey} alt="Green key" />
        </div>
    );
}

export default CellKey;