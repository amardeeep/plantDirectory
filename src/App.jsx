import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import Plant from './Plant'
function App() {
  const usePlants=()=>{
    const [plants,setPlants]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch('https://trefle.io/api/v1/plants?token=SCARQuINspMYmysqpJAvQE4h7bvgKsRihTowf3-XzIQ',{mode:'cors'})
        .then((response)=>{
            if(response.status>=400){
                throw new Error("Server Error !")
            }
            return response.json()
            
        })
        .then((response)=>{
            setPlants(response.data)
        })
        .catch((error)=>{setError(error)})
        .finally(()=>setLoading(false))

    },[])
    return {plants,error,loading,setPlants}
}
const {plants,error,loading}=usePlants();
console.log(plants)
  if(loading){
    return(<p> Loading ....</p>)
  }
  if(error){
    return( <p>An Unexpected Error has occured</p> )
  }
  
  return (
    <>
      <nav>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="links">
          <Link to='/'>Collections</Link>
          <Link to='/about'>About</Link>
        </div>
      </nav>
      <main>
        <header>Plants Heading</header>
        <section>
          {plants.map((plant)=>{
            return <Plant plant={plant} key={plant.id}></Plant>
          })}
        </section>
      </main>
      <footer>
        Made with Love and React
      </footer>
    </>
  )
}

export default App