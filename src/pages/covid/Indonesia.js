import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards";
import Hero from "../../components/Hero";
import Summary from "../../components/Summary";
import { updateCovid } from "../../features/covidSlice";
import ENDPOINTS from "../../utils/constants/endpoint";


function Home() {
  const dispatch = useDispatch();
  // const [cards, setCards] = useState([]);
  const title = "Indonesia"
  useEffect(() => { getDataIndo(); },[]);

  async function getDataIndo() {
    const response = await axios(ENDPOINTS.IDN);
    
    const data = [
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
      <Summary summaryImage={ENDPOINTS.SUMMARY_IDN} title={title}/>
    </>
  );
}

export default Home;
