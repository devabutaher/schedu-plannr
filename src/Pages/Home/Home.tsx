import MySchedule from "../Schedule/MySchedule/MySchedule";
import Contact from "./Contact/Contact";
import Details from "./Details/Details";
import Header from "./Header/Header";
import Membership from "./Membership/Membership";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";
import Shortend from "./Shortend/Shortend";
import Sponsorship from "./Sponsorship/Sponsorship";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden">
      <Header></Header>
      <Services></Services>
      <Details></Details>
      <Membership></Membership>
      <Shortend/>
      <Sponsorship></Sponsorship>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
