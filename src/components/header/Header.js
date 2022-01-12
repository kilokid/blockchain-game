/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../button/Button";

import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__item">
                        <a className="header__link" href="#">Home</a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">Game</a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">Vault</a>
                    </li>
                    <li className="header__item">
                        <a className="header__link" href="#">Scoreboard</a>
                    </li>
                </ul>
            </nav>
            <Button className="header__button" text={'Connect wallet'} />
        </header>
    );
}

export default Header;