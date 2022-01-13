/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.scss";

import twitter from "../../resources/img/twitter.svg";
import discord from "../../resources/img/discord.svg";
import telegram from "../../resources/img/telegram.svg";
import instagram from "../../resources/img/instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="#">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={discord} alt="Discord" />
                </a>
                <a href="#">
                    <img src={telegram} alt="Telegram" />
                </a>
                <a href="#">
                    <img src={instagram} alt="Instagram" />
                </a>
            </div>
            <a className="footer__smart" href="#">Smart contract</a>
        </footer>
    );
}

export default Footer;