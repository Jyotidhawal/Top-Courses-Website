import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";
const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickhandler() {
        if (likedCourses.includes(course.id)) {
            // pehle se like hua pada hai
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else {
            // pehle se like nahi hua pada hai
            // insert karna padega course ko likedCourses me
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, [course.id]]);
            }
            toast.success("liked successfully");

        }

    }

    return (<div className="w-[300px] bg-bgDark rounded-md  bg-opacity-80 overflow-hidden">
        <div className="relative">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2  top-28 grid place-items-center">
                <button onClick={clickhandler} >
                    {
                        likedCourses.includes(course.id) ?
                            (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">
                    {course.title}
                </p>
                <p className="mt-2 text-white">
                    {course.description.length > 100 ? (course.description.substr(0, 100) + "...") : (course.description)}
                </p>
            </div>
        </div>
    </div >)
}

export default Card;
