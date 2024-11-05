import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import PaymentInfo from "./components/PaymentInfo";
import ThreeSteps from "./components/ThreeSteps";
import Info from "./components/Info";
import LeaveRequest from "./components/LeaveRequest";
import Footer from "./components/Footer";
import Prosses from "./components/Prosses";
import SecFooter from "./components/SecFooter";

function App() {
  return (
    <div className="w-full">
      <Header />
        <Hero/>
        <PaymentInfo/>
      <ThreeSteps/>
        <Prosses/>
        <Info/>
        <LeaveRequest/>
        <Footer/>
      <SecFooter/>
    </div>
  );
}

export default App;
