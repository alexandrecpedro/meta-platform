import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";

export default function App() {

  return (
    <>
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