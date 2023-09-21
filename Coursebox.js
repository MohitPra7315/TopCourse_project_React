import { Fclike } from 'react-icons/fc'

import {  toast } from 'react-toastify';

import { useState } from "react";


function Coursebox(props) {

    let couseinfo = props.cour
    const like = props.like;
    const setLike = props.setLike;
    // console.log(couseinfo);

    // console.log(couseinfo)

    const [btnlike, setBtnlike] = useState(false)
    function likeHandler() {
        if (like.includes(couseinfo.id)) {
            // maina check kiya h phale s kuch h to nhi is id ka object
            setLike((prev) => prev.filter((courseid) => (courseid !== couseinfo.id)));
            setBtnlike(false)
            toast.success("kkk")
        }
        else {
            // Phale sa like nhi h 
            // insert y course like course m
            if (like.length === 0) {
                setLike([couseinfo.id])
            } else {
                setLike((prev) => [...prev, couseinfo.id])
            }
            setBtnlike(true)
        }

    }

    return (
        <div className=" w-[350px] min-h-[450px]  bg-gray-900  text-white m-1 relative ">
            <div className="w-full ">
                <img src={couseinfo.image.url} />


            </div>
            <div className="mt-5">
                <p className="font-bold text-[22px] mb-4">{couseinfo.title}</p>
                <p className="">{
                    (couseinfo.description.length > 100) ? (couseinfo.description.substr(0, 100)) : (couseinfo.description)
                } </p>
            </div>
            <div className=" absolute bottom-5 ml-[50%] translate-x-[-50%]">{

                <div>
                    {
                        (!btnlike) ? <Fclike onClick={likeHandler} className="bg-red-500 rounded-md py-2 px-[130px] text-white  hover:bg-red-600 " >Liked</Fclike>
                            : <button onClick={likeHandler} className="bg-red-500 rounded-md py-2 px-[130px] text-white  hover:bg-red-600 " >Unlike</button>
                    }
                </div>}
                <div>

                </div>
            </div>
        </div>
    );
}
export default Coursebox;