import './App.css';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Loader  from './components/Loader';
import {apiUrl , filterData} from "./data"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const App = () => {


  const[courses , setCourses] = useState(null);
  const [loading, setLoading ]= useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
        const response = await fetch(apiUrl);
        const apiData = await response.json();
        // console.log(apiData);
         // save the course data 
        setCourses(apiData.data);   
        // setCourses(apiData);     
        }
        catch(error)
        {
          toast.error("something went wrong");
        }
        setLoading(false);
    }

  useEffect( () => {       
      fetchData();
  }, []); 

  return (
    <div className='flex flex-col min-h-screen bg-[#4a4e69] box-border'>

      <div>
         <Navbar/>
      </div>

      <div>
         <Filter filterData={filterData} category={category}  setCategory={setCategory} />
      </div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
       {
        loading ? (<Loader/>) : (<Cards courses={courses} category={category}/> )
       }
      </div>

    </div>
  );
}

export default App;
