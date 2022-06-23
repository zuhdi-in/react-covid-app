import Hero from "../components/Hero";
import Cards from "../components/Cards";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoint";
import { updateCovid } from "../features/covidSlice";
import { useDispatch} from "react-redux";
import { useEffect} from "react";
import Summary from "../components/Summary";

function Home() {
  const dispatch = useDispatch();
  // const [cards, setCards] = useState([]);
  const title = "Global"
  useEffect (() => { getDataGlobal (); },[]);

  async function getDataGlobal (){
    const response = await axios(ENDPOINTS.GLOBAL);
    const data =  [
      { 
        title : "confirmed",
        ...response.data.confirmed
      },
      {
        title : "deaths",
        ...response.data.deaths
      },
      {
        title : "recovered",
        ...response.data.recovered
      }
    ];

    // setCards(data);
    dispatch(updateCovid(data));
  }

  return (
    <>
      <Hero />
      <Cards title={title}/>
      <Summary summaryImage={ENDPOINTS.SUMMARY_GLOBAL} title={title} />
    </>
  );
}

export default Home;
