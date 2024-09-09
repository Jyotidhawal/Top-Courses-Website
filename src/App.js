import React from "react";
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // save data into variable
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something Went Wrong ");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (<div className="min-h-screen flex flex-col  bg-bgDark2 ">
    <div>
      <Navbar></Navbar>
    </div>
    <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData} setCategory={setCategory} category={category}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap jutify-center items-center min-h-[50vh]">
        {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)}
      </div>
    </div>

  </div>);
};

export default App;
