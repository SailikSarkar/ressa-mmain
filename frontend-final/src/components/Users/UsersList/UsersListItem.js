import React from "react";
import { Link, useHistory } from "react-router-dom";
import { MailIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  blockUserAction,
  unBlockUserAction,
} from "../../../redux/slices/users/usersSlices";

const UsersListItem = user => {
  //dispatch
  const dispatch = useDispatch();
  //history
  const history = useHistory();

  const sendMailNavigator = () => {
    history.push({
      pathname: "/send-mail",
      state: {
        email: user?.user?.email,
        id: user?.user?._id,
      },
    });
  };
  return (
    <>
      <div className="p-4 mb-4 tracking-wide bg-white dark:bg-darkk-600 shadow rounded-3xl">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-3/12 flex px-4 mb-6 lg:mb-0">
            <img
              className="w-10 h-10 mr-4 object-cover rounded-full"
              src={user?.user?.profilePhoto}
              alt="profile "
            />
            <div>
              <p className="text-sm font-bold  text-black dark:text-gray-50 tracking-widest">
                {user?.user?.firstName} {user?.user?.lastName}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 tracking-widest">{user?.user?.email}</p>
            </div>
          </div>
          <div className="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
            <p className="py-1 px-2 text-xs text-black font-extrabold bg-yellow-400 rounded-full">
              {user?.user?.accountType}
              {/* <span>{user?.user?.isBlocked && "Blocked"}</span> */}
            </p>
          </div>
          <div className="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
            <p className="text-sm font-bold text-black dark:text-gray-100">
              <span className="text-base mr-2  text-bold text-yellow-500">
                {user.user?.followers?.length}
              </span>
              followers
            </p>
          </div>
          <div className="w-full flex lg:w-4/12 px-4  mb-6 lg:mb-0">
            <p className="inline-block py-1 px-2 mr-2 mb-1 lg:mb-0 h-10 text-xs border-2 rounded-lg">
              <span className="  flex flex-wrap mr-2  mt-2 font-bold boder-2 border-gray-900 text-bold text-gray-900 dark:text-gray-50 ">
                {user.user?.posts?.length}  <div className=" flex-wrap  text-gray-900 dark:text-gray-50 font-bold"> -Posts</div>
              </span>
            </p>
            <div className="  inline-block justify-items-center py-1 px-2 text-center mr-2   text-xs  bg-yellow-200 font-bold  rounded-lg hover:bg-green-600 shadow-md hover:text-white">
            <Link
              to={`/profile/${user?.user?._id}`}
              className=" text-yellow-700 inline-block  py-2 px-3 text-center   lg:mb-0 text-xs   font-bold   "
            >
              Profile
            </Link>
            </div>

           

            {user?.user?.isBlocked ? (


<div className=" text-green-600 inline-block justify-items-center py-1 px-2 text-center mr-2   text-xs  bg-green-200 font-bold  rounded-lg hover:bg-gray-200 hover:text-white shadow-md">
<button
                onClick={() => dispatch(unBlockUserAction(user?.user?._id))}
                className="text-green-600 inline-block  py-2 px-2 text-center   lg:mb-0 text-xs   font-bold "
              >
                unblock
              </button>
</div>

             
            ) : (

              <div className=" text-gray-500 inline-block justify-items-center py-1 px-2 text-center mr-2  text-xs  bg-red-200 font-bold  rounded-lg hover:bg-gray-100 shadow-md hover:text-white">
 <button
                onClick={() => dispatch(blockUserAction(user?.user?._id))}
                className="text-red-600 inline-block  py-2 px-2 text-center   lg:mb-0 text-xs   font-bold "
              >
                Block
              </button>
</div>

             
            )}


<div className=" text-gray-500 inline-block justify-items-center py-1 px-2 text-center mr-2   text-xs  bg-yellow-200 font-bold  rounded-lg hover:bg-green-600 hover:text-white shadow-md">
<button
              onClick={sendMailNavigator}
              className="inline-flex  justify-center  px-2    text-sm font-medium rounded-lg text-gray-700   focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              <MailIcon
                className=" m-1 h-5 w-5 text-yellow-600"
                aria-hidden="true"
              />
              <span className="text-base mt-0.5 mr-2 justify-center  text-bold text-yellow-600">
                Message
              </span>
            </button>
</div>




           
          </div>
          <div className="w-full lg:w-1/12 px-4">
            <div className="flex items-center">
              {/* Send Mail */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersListItem;
