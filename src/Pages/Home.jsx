import Header from "../Components/Header";
import HowWork from "../Components/HowWork";
import MostDemanding from "../Components/MostDemanding";
import GetOverJobi from "../Components/GetOverJobi";
import Testemonile from "../Components/Testemonile";
import NewJopListening from "../Components/NewJopListening";
import TrustedCompany from "../Components/TrustedCompany";
import MatchedJop from "../Components/MatchedJop";
import Footer from "../Components/Footer";
import MostCompleteJop from "../Components/MostCompleteJop";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ShowAllPosts } from "../firebase/mainfunction";
function Home() {
  const dispatch = useDispatch();
  const yaret = useSelector((state) => state.jobsPosts);
  useEffect(() => {
    dispatch(ShowAllPosts());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <HowWork />
      <MostDemanding />
      <GetOverJobi />
      <NewJopListening />
      <Testemonile />
      <TrustedCompany />
      <MatchedJop />
      <MostCompleteJop />
      <Footer />
    </div>
  );
}

export default withLoader(Home);
