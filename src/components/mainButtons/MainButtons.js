import Button from "../button/Button";
import ButtonGray from "../buttonGray/ButtonGray";

import "./mainButtons.scss";

const MainButtons = () => {
    return (
        <div className="main-buttons">
            <div className="main-buttons__border">
                <Button text={"Level 1"} class={"main-buttons--purple"} />
            </div>
            <div className="main-buttons__new-level">
                <ButtonGray text="Level 2" class="main-button__gray" />
                <ButtonGray text="Level 3" class="main-button__gray" />
            </div>
        </div>
    );
}

export default MainButtons;