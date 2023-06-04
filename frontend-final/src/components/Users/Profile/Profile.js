import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HeartIcon,
  EmojiSadIcon,
  UploadIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { MailIcon, EyeIcon } from "@heroicons/react/solid";
import {
  userProfileAction,
  followUserAction,
  unfollowUserAction,
} from "../../../redux/slices/users/usersSlices";
import { useDispatch, useSelector } from "react-redux";
import DateFormatter from "../../../utils/DateFormatter";
import LoadingComponent from "../../../utils/LoadingComponent";

export default function Profile(props) {
  const dispatch = useDispatch();
  const id = props.computedMatch.params.id;
  //History
  const history = useHistory();

  //User data from store
  const users = useSelector(state => state.users);
  const {
    profile,
    profileLoading,
    profileAppErr,
    profileServerErr,
    followed,
    unFollowed,
    userAuth,
  } = users;

  //fetch user profile
  useEffect(() => {
    dispatch(userProfileAction(id));
  }, [id, dispatch, followed, unFollowed]);

  //send mail handle click
  const sendMailNavigate = () => {
    history.push({
      pathname: "/send-mail",
      state: {
        email: profile?.email,
        id: profile?._id,
      },
    });
  };

  //isLogin

  const isLoginUser = userAuth?._id === profile?._id;

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-darkk-800 flex justify-center items-center">
        {profileLoading ? (
          <LoadingComponent />
        ) : profileAppErr || profileServerErr ? (
          <h2 className="text-yellow-400 text-2xl">
            {profileServerErr} {profileAppErr}
          </h2>
        ) : (
          <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-darkk-800 ">
            {/* Static sidebar for desktop */}

            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
              <div className="flex-1 relative z-0 flex overflow-hidden">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                  <article>
                    {/* Profile header */}
                    <div>
                      <div>
                        <img
                          className="h-32 sm:h-32 w-full object-cover rounded-2xl lg:h-72"
                          src="https://res.cloudinary.com/diuoze6fm/image/upload/v1684799122/artwork-landscape-mountains-forest-wallpaper-68654a8247389c8696ef6b66280031c9_v2kpa9.jpg"
                          alt={profile?.firstName}
                        />
                      </div>
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5"> 
                          <div className="flex sm:-mt-20 -mt-8">
                            <img
                              className="h-24   w-24 rounded-full  ring-4 ring-white sm:h-52 sm:w-52"
                              src={profile?.profilePhoto}
                              alt={profile?.firstName}
                            />
                          </div>
                          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className=" flex flex-col 2xl:block mt-10 min-w-0 flex-1">
                              <h1 className="text-2xl tracking-wider  font-bold dark:text-gray-200 text-gray-900  ">
                                {profile?.firstName} {profile?.lastName}
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium  text-yellow-800">
                                  {profile?.accountType}
                                </span>
                                {/* Display if verified or not */}
                                {profile?.isAccountVerified ? (
                                  <span className="inline-flex ml-0 sm:ml-1 items-center px-3 py-0.5  rounded-lg text-xs font-mono bg-green-200 text-green-700">
                                    Account Verified
                                  </span>
                                ) : (
                                  <span className="inline-flex ml-0 sm:ml-1  items-center px-3 py-0.5  rounded-lg text-xs font-mono bg-red-200 text-red-700">
                                    Unverified Account
                                  </span>
                                )}
                              </h1>
                              <p className="m-0 text-xs font-mono text-darkk-900 dark:text-gray-500 tracking-wide mt-2 ">
                                Date Joined: {""}
                                <DateFormatter date={profile?.createdAt} />{" "}
                              </p>
                              <p className="text-gray-900 dark:text-gray-500 text-xs tracking-wide font-mono mt-2 mb-2">
                                {profile?.posts?.length} posts{" "}
                                {profile?.followers?.length} followers{" "}
                                {profile?.following?.length} following
                              </p>
                              {/* Who view my profile */}
                              <div className="flex items-center  mb-2">
                                <EyeIcon className="h-5 w-5 text-darkk-600 dark:text-gray-100 " />
                                <div className="pl-2">
                                  {/* {profile?.viewedBy?.length}{" "} */}
                                  <span className="text-indigo-400 cursor-pointer ">
                                    Number of viewers{" "}
                                    {profile?.viewedBy?.length}
                                  </span>
                                </div>
                              </div>

                              {/* is login user */}
                              {/* Upload profile photo */}
                              <div className=" flex flex-wrap">
                              {isLoginUser && (
                                <Link
                                  to={`/upload-profile-photo`}
                                  className="inline-flex justify-center font-bold w-28 px-4 py-2  border border-gray-300 shadow-sm text-xs  rounded-xl text-pink-700 bg-pink-200 hover:bg-gray-50 focus:outline-none mr-2 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                >
                                  <UploadIcon
                                    className="-ml-1 mr-2 h-4 w-4 text-pink-700 "
                                    aria-hidden="true"
                                  />
                                  <span>Profile Pic</span>
                                </Link>

                            
                                
                              )}

{isLoginUser && (
                                <Link
                                  to={`/upload-profile-photo`}
                                  className="inline-flex justify-center w-28 px-4 py-2 border  border-gray-300 shadow-sm text-xs  font-bold rounded-xl text-pink-700 bg-pink-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                >
                                  <UploadIcon
                                    className="-ml-1 mr-2 h-4 w-4 text-pink-700"
                                    aria-hidden="true"
                                  />
                                  <span>Cover Pic</span>
                                </Link>

                            
                                
                              )}
                              </div>

                            </div>

                            <div className=" mt-4 flex flex-row justify-stretch space-y-3 sm:flex-row  sm:space-y-0 sm:space-x-4">
                              
                              {/* // Hide follow button from the same */}
                              {!isLoginUser && (
                                <div className="">
                                  {profile?.isFollowing ? (
                                    <button
                                      onClick={() =>
                                        dispatch(unfollowUserAction(id))
                                      }
                                      className="mr-2 inline-flex justify-center px-4 py-2  border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-yellow-500 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                      <EmojiSadIcon
                                        className="-ml-1 mr-2 h-5 w-5 text-gray-100 "
                                        aria-hidden="true"
                                      />
                                      <span>Unfollow</span>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() =>
                                        dispatch(followUserAction(id))
                                      }
                                      type="button"
                                      className="inline-flex justify-center px-4 py-2   shadow-sm text-sm font-medium rounded-md text-gray-100 bg-indigo-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                      <HeartIcon
                                        className="-ml-1 mr-2 h-5 w-5 text-gray-100"
                                        aria-hidden="true"
                                      />
                                      <span>Follow </span>
                                      <span className="pl-2">
                                        {profile?.followers?.length}
                                      </span>
                                    </button>
                                  )}

                             
                                </div>
                              )}
                              {/* Update Profile */}


                              <div className=" h-9">
                                {isLoginUser && (
                                  <Link
                                    to={`/update-profile/${profile?._id}`}
                                    className="mr-2 inline-flex justify-center px-4 py-2  border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-yellow-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                  >
                                    <UserIcon
                                      className="-ml-1 mr-2 h-5 w-5 text-gray-100"
                                      aria-hidden="true"
                                    />
                                    <span>Update Profile</span>
                                  </Link>
                                  
                                  
                                )}




<button
                                onClick={sendMailNavigate}
                                className="mr-2 inline-flex justify-center px-4 py-2  border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-yellow-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                              >
                                <MailIcon
                                  className="-ml-1 mr-2 h-5 w-5 text-gray-200"
                                  aria-hidden="true"
                                />
                                <span className="">
                                  Send Message
                                </span>
                              </button>
                                
                                
                                
                              </div>
                              





                              

                              
                          
                          









                            
                            </div>
                          </div>
                        </div>
                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                          <h1 className="text-2xl font-bold text-darkk-900 ">
                            {profile?.firstName} {profile?.lastName}
                          </h1>
                        </div>
                      </div>
                    </div>
                    {/* Tabs */}
                    <div className="mt-6 sm:mt-2 2xl:mt-5">
                      <div className="">
                        <div className="max-w-5xl mx-auto "></div>
                      </div>
                    </div>
                    <div className="flex justify-center place-items-start flex-wrap  md:mb-0">


                      
                      <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <h1 className="text-center text-xl  bg-white dark:bg-darkk-600 shadow-xl p-2 dark:text-gray-50 text-gray-900 rounded-xl font-bold tracking-wider mb-2 ">
                          Who viewed my profile : {profile?.viewedBy?.length}

                          
                        </h1>

                        <div className=" bg-white dark:bg-darkk-600  p-5 shadow-lg rounded-xl">

                        {/* Who view my post */}
                        <ul className="">
                          {profile?.viewedBy?.length <= 0 ? (
                            <h1>No Viewer</h1>
                          ) : (
                            profile?.viewedBy?.map(user => (
                              <li>
                                <Link>
                                  <div className="flex mb-2 items-center space-x-4 lg:space-x-6">
                                    <img
                                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                                      src={user?.profilePhoto}
                                      alt={user?.firstName}
                                    />
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                    <Link to={user?._id}>
                    <h4 className="mb-1 text-2xl font-bold text-gray-50 ">
                      {/* //text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600 */}
                      <span className=" lg:text-xl font-bold text-lg te tracking-wide  text-black dark:text-gray-50  ">
                        {user?.firstName}{" "}
                        {user?.lastName}{" "}
                      </span>
                    </h4>
                  </Link>
                                      <p className="text-gray-500 text-sm tracking-wider">
                                        {user?.accountType}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))
                          )}
                        </ul>
                        </div>
                      </div>
                      {/* All my Post */}
                      <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                        <h1 className="text-center text-xl bg-white dark:bg-darkk-600  shadow-xl p-2 dark:text-gray-50 text-gray-900 rounded-xl font-bold tracking-wider mb-2 ">
                          My Post - {profile?.posts?.length}
                        </h1>
                        {/* Loop here */}
                        {profile?.posts?.length <= 0 ? (
                          <h2 className="text-center text-xl">No Post Found</h2>
                        ) : (
                          profile?.posts?.map(post => (
                            <div className=" ml-0.5 flex flex-wrap  -mx-3 mt-3  lg:mb-6 bg-white dark:bg-darkk-600 rounded-xl mr-1 p-4">
                              <div className="mb-2   w-full  lg:w-1/4 px-3">
                                <Link>
                                  <img
                                    className="object-cover w-full   rounded-xl"
                                    src={post?.image}
                                    alt="poster"
                                  />
                                </Link>
                              </div>
                              <div className="w-full lg:w-2/4 px-3">
                                <Link
                                  // to={`/post/${post?._id}`}
                                  className="hover:underline"
                                >
                                  <h3 className="mb-1 text-2xl dark:text-yellow-400  text-yellow-500 font-extrabold font-heading">
                                    "{post?.title}"
                                  </h3>
                                </Link>
                                <p className="text-gray-400 font-medium ">
                                  {post?.description}
                                </p>

                                <Link
                                  className="text-indigo-500 hover:underline"
                                  to={`/posts/${post?._id}`}
                                >
                                  Read more
                                </Link>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
