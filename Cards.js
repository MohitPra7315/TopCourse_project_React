import { useState } from "react";
import Coursebox from "./Coursebox";



function Cards(props) {
    const alldata = props.alldata;
    const catagry =props.catagry;
    const setCatagry=props.setCatagry;
    // console.log(alldata)
    // console.log(allCourses)


    const getCourse = () => {
        if(catagry==="All"){
        let allCourses = [];

        Object.values(alldata).forEach((cousecat) => {
            cousecat.forEach((coure) => {
                allCourses.push(coure)
            })
        })
        return allCourses;
    }
    else{
        return alldata[catagry]
    }
    }


    const [like ,setLike]=useState([])
    console.log(like);
   

    return (
        <div className="  w-11/12 max-w-[1300px] mx-auto min-h-[100vh]   ">

            <div className="flex flex-wrap justify-center gap-x-2 pt-10"> 

                {
                    getCourse().map((cour) => ( <Coursebox key={cour.id} cour={cour}   like={like} setLike={setLike}>     </Coursebox>  ))
                }

            </div>

        </div>
    )
}

export default Cards