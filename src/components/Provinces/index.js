import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import Table from "../Table";
// import data from "../../utils/constants/provinces";
import StyledProvinces from "./Provinces.styled";


function Provinces (props) {
    const patients = useSelector((state) => state.prov.prov)
    console.log(patients)
    // const {patients} = props
    // console.log(patients.indexOf("Jawa Barat"));
    return(
        <StyledProvinces>
            <section className={"provinces"} id="provinsi">
                <div>
                    <h2 className={"provinces__title"}>Data Perkembangan Covid-19 di setiap Provinsi</h2>
                    <p className={"provinces__subtitle"}>Data Covid Berdasarkan Provinsi</p>
                </div>
                <div className={"provinces__bottom"}> 
                    <table className={"provinces__table"}>
                        <thead>
                            <tr>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map(function(patient) {return <Table key={nanoid(10)} patient={patient}/>})}
                        </tbody> 
                    </table>   
                </div>
            </section>
        </StyledProvinces>
    )
}

export default Provinces;