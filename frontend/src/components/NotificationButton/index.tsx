import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";

export default function NotificationButton() {
    return (
        <div className="meta-red-btn">
            <img src={icon} alt="Notify" />
        </div>
    )
}