import logo from "../../assets/img/logo.svg";
import "./styles.css";

export default function Header() {
    return (
        <header>
            <div className="meta-logo-container">
                <img src={logo} alt="Meta Platform" />
                <h1>Meta Platform</h1>
                <p>
                    Developed by
                    <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                </p>
            </div>
        </header>
    )
}