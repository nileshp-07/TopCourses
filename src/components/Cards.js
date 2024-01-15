import React, { useState } from 'react'
import Card from "./Card";

const Cards = ({courses, category}) => {
    const [likedCourses , setLikedCourse] = useState([]);

    // console.log(courses);

    // store all the course into a single array 
    const getCourses = () => {
        if(category=== "All"){
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) => {
                    allCourses.push(course);
                }) 
            })
            return allCourses;
        }
        else{
            // we have  to show the specific category data (Array)
            return courses[category];
        }
      
    }

  return (

    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (course) => {
               return  <Card {...course}  key={course.id} 
               likedCourses={likedCourses} setLikedCourse={setLikedCourse} />
            })
        }

    </div>
    
  );
}

export default Cards; 




