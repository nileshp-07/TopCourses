import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";


const Card = ({id, title , description , image , likedCourses , setLikedCourse}) => {

  function clickHandler(){

    if(likedCourses.includes(id))
    {
      // already liked , remove like 
      setLikedCourse( (prev) => prev.filter( (c_id) => (c_id !== id)));
      toast.warning("Like Removed");
    }
    else{
      // remove like 
      if(likedCourses.length === 0){
        setLikedCourse([id]);
      }
      else{
        // non-empty case 
        setLikedCourse(  (prev) => [...prev , id]);
      }
      toast.success("Like Successfully");
    }
  }


  return (
    <div className='w-[300px] bg-[#22223b] bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img  src={image.url} />
            <button onClick={clickHandler} className='w-[40px] h-[40px] bg-white rounded-full
             absolute right-2 -bottom-3 flex justify-center items-center'>
                {
                   likedCourses.includes(id) ? <FcLike fontSize="1.7rem"/>: <FcLikePlaceholder  fontSize="1.7rem"/> 
                }
            </button>
        </div>

        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'> {title}</p>
          <p className='mt-2 text-white'> 
                {
                    description.length > 100 ? (description.substring(0,100) + "...") : (description)     
                }
          </p>
        </div>
        
    </div>
  )
}


export default Card;