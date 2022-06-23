import { useState } from "react";
import Alert from "../Alert";
import ilustrasi from "../../assets/images/Ilustrasi-addform.png"
import { useDispatch } from "react-redux";
import { addProvCovid } from "../../features/provinceSlice";
import { useSelector } from "react-redux";
import StyledCovidForm from "./CovidForm.styled";

function CovidForm(props) {
    const prov = useSelector((state) => state.prov.prov)
    const dispatch = useDispatch();
    
    const [formData, setFormData] = useState({
        jumlah : "",
        status : "default",
        kota : "default"
    });

    const [validateData, setValidateData] = useState({
        IsTitleError: false,
        IsDateError: false,
        IsPosterError: false
    })
    
    const { jumlah, status, kota } = formData;

    function validate(e) {

        if (kota === "") {
            setValidateData({...validateData, IsTitleError: true});
            return false;
        }

        else if (status === "") {
            setValidateData({...validateData, IsDateError: true, IsTitleError: false});
            return false;
        }

        else if (jumlah === "") {
            setValidateData({...validateData, IsPosterError: true, IsTitleError: false, IsDateError: false});
            return false;
        }
 
        else {
            setValidateData({...validateData, IsTitleError: false, IsDateError: false, IsPosterError: false});
            return true;
        }
    }

    function postCovid() {
        const covid = {
            kota : kota,
            status : status,
            jumlah : jumlah
        };
        // const search = patients.find(({kota}) => kota === state.kota);
        // const statusUpdated = {[state.status]: state.jumlah}
        // const patientUpdated = Object.assign(search, statusUpdated);
        // Object.assign(patients, patientUpdated);
        dispatch(addProvCovid(covid));
        // localStorage.setItem("movie", JSON.stringify(user));
    }

    function handleSubmit(e) {
        e.preventDefault();
        validate() && postCovid();       
    }
    
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value}) 
    }

    return(
        <StyledCovidForm>
            <section className={"form"} id="form">
                <div className={"form__left"}>
                    <img src={ilustrasi} alt="" className={"form__image"}/>
                </div>
                <div className={"form__right"}>   
                    <h2 className={"form__title"}>Form Covid</h2>
                    <form onSubmit={handleSubmit} className={"form__form"}>
                        <div className={"form__group"}>
                            <label className={"form__label"}>provinces</label>
                            <select name="kota" onChange={handleChange} value={kota} className={"form__input"}>
                                <option value="">Pilih Kota</option>
                                {prov.map(function(data) {return <option key={data.kota} value={data.kota}>{data.kota}</option>})}
                            </select>
                            {validateData.IsKotaError ? <Alert>Kota wajib diisi</Alert> : ""}
                        </div>
                        <div className={"form__group"}>
                            <label className={"form__label"}>Status</label>
                            <select name="status" onChange={handleChange} value={status} className={"form__input"}>
                                <option value="">Pilih Status</option>
                                <option value="kasus">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                            {validateData.IsStatusError ? <Alert>Status wajib diisi</Alert> : ""}
                        </div>                        
                        <div className={"form__group"}>
                            <label className={"form__label"}>Jumlah</label>
                            <input type="text" name="jumlah" onChange={handleChange} value={jumlah} className={"form__input"}/>
                            {validateData.IsJumlahError ? <Alert>Jumlah wajib diisi</Alert> : ""}
                        </div> 
                        <input type="submit" value="Submit" className={"form__submit"}/>                       
                    </form>
                </div>
            </section>
        </StyledCovidForm>
    )

}


export default CovidForm;