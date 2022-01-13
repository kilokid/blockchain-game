import './newLevel.scss';

import key from '../../resources/img/greenKey.svg';

const NewLevel = () => {
    return (
        <div className="new-level">
            <p className="new-level__title"><span className="new-level__title--purple">Level 2</span> keys remaining</p>
            <div className="new-level__keys">
                <img className="new-level__keys-1" src={key} alt="Green key" />
                <img className="new-level__keys-2" src={key} alt="Green key" />
                <img className="new-level__keys-3" src={key} alt="Green key" />
            </div>
            <p className="new-level__counter">X 65</p>
        </div>
    );
}

export default NewLevel;