import MainButtons from "../mainButtons/MainButtons";
import NewLevel from "../newLevel/NewLevel";

import "./main.scss";

const Main = () => {
    return (
        <main className="main">
            <MainButtons />
            <NewLevel />
        </main>
    );
}

export default Main;