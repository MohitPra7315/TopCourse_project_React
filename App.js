
import './App.css';
import { useEffect, useState } from 'react';

import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';

const filterData = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Development",
  },
  {
    id: "3",
    title: "Business",
  },
  {
    id: "4",
    title: "Design",
  },
  {
    id: "5",
    title: "Lifestyle",
  },
];

function App() {


  const [apidata, newApidata] = useState([])

  const [catagry, setCatagry] = useState(filterData[0].title)
  console.log(catagry)
  useEffect(() => {


    const fetchd = async () => {
      const apiUrl = "https://codehelp-apis.vercel.app/api/get-top-courses";


      try {
        const res = await fetch(apiUrl);
        const result = await res.json();
        console.log(result.data)
        newApidata(result.data)

      }
      catch (error) {
        console.log(error)
      }
    }
    fetchd();
  }, [])

  console.log(apidata);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='bg-gray-600 '>
        <div>
          <Filter data={filterData} catagry={catagry} setCatagry={setCatagry}   ></Filter>

        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto min-h-[50vh] '>
          <Cards alldata={apidata} catagry={catagry} setCatagry={setCatagry} />

        </div>
      </div>

    </div>
  );
}

export default App;
