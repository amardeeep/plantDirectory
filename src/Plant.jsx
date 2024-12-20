import { useEffect, useState } from 'react'
import plantCss from './Plant.module.css'
function Plant({plant}){
    const id=plant.id
    const usePlantDetailed=()=>{
        const [plantDetailed,setPlantDetailed]=useState(null);
        const [loading,setLoading]=useState(true);
        const [error,setError]=useState(false);
        useEffect(()=>{
            fetch('https://trefle.io/api/v1/plants/'+id+'?token=SCARQuINspMYmysqpJAvQE4h7bvgKsRihTowf3-XzIQ',{mode:'cors'})
            .then((response)=>{
                if(response.status>=400){
                    throw new Error("Server Error !")
            }
                return response.json();
        })
        .then((response)=>{
            console.log(response)
            setPlantDetailed(response.data)
        })
        .catch((error)=>{setError(error)})
        .finally(()=>setLoading(false))
        },[])
        return {plantDetailed,error,loading,setPlantDetailed}
    }
    const {plantDetailed,error,loading}=usePlantDetailed();
    if(loading){
        return <p>Loading ...</p>
    }
    if(error){
        console.log(error)
        return <p>Error Retrieving More Details</p>
    }
    return(
        <>
            <div className={plantCss.plant}>
                <div className={plantCss.names}>
                    <h2 className={plantCss.h2}>{plant.common_name}</h2>
                    <h3 className={plantCss.h3}>{plant.scientific_name}</h3>
                </div>
                <div className={plantCss.imgAndDetails}>
                <img src={plant.image_url} className={plantCss.img} alt="Plant Image" />
                <div className={plantCss.details}>
                    <p><strong>Family : </strong>{plantDetailed.family.name} </p>
                    <p><strong>Observations : </strong>{plantDetailed.observations} </p>
                    <p><strong>Vegetabe : </strong>{plantDetailed.vegetable?"Yes":"No"} </p>
                    <p><strong>Genus : </strong>{plantDetailed.genus.name} </p>
                    <p><strong>Year : </strong>{plant.year} </p>
                    <p><strong>Bibliography : </strong>{plant.bibliography} </p>
                </div>
                </div>
                
            </div>
        </>
    )
}
export default Plant