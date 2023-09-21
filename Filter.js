// import { useState } from "react";


const Filter = (props) => {
    const filterData = props.data;
    const catagry = props.catagry;
    const setCatagry = props.setCatagry
    // console.log(data.id)


    console.log(filterData.map((c) => c.title))
    function filterHandler(info) {
        setCatagry(info)
console.log(info);

    }


    return (
        <div className=" max-w-max flex flex-wrap space-x-4 gap-y-3 mx-auto py-4 justify-center  ">

            {
                filterData.map((course) => {
                    return <button onClick={() => { filterHandler(course.title) }} className={` rounded-md text-white bg-black hover:bg-opacity-50  p-3 border-1 text-bold
                    ${catagry === course.title ? "bg-opacity-60 border-white border-2" : "bg-opacity-50 border-transparent"}
                    
                    `}

                        key={filterData.id}>     {course.title}             </button>
                })
            }
        </div>)
}
export default Filter;