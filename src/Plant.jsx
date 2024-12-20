import {Link} from 'react-router-dom'
function Plant({plant}){
    return(
        <>
            <h2>{plant.common_name}</h2>
            <h3>{plant.scientific_name}</h3>
            <img src={plant.image_url} alt="Plant Image" />
            <Link to='/plants/:plantName'><button>More Details here</button></Link>
        </>
    )
}
export default Plant