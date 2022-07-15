import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
    saleId: number;
}

function handleClick(id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS sent successfully");
        });
}

export default function NotificationButton({ saleId } : Props) {
    return (
        <div className="meta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notify" />
        </div>
    )
}