import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="meta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}