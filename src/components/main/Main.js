import MainButtons from "../mainButtons/MainButtons";
import NewLevel from "../newLevel/NewLevel";
import CellKey from "../cellKey/CellKey";
import Keys from "../keys/Keys";

import "./main.scss";

const Main = () => {
    return (
        <main className="main">
            <div className="main__top">
                <MainButtons />
                <NewLevel />
            </div>
            <div className="main__bottom">
                <CellKey />
                <Keys />
            </div>
        </main>
    );
}

export default Main;