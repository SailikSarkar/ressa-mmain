import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { fetchCategoriesAction } from "../../redux/slices/category/categorySlice";
import DateFormatter from "../../utils/DateFormatter";
import LoadingComponent from "../../utils/LoadingComponent";

const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);
  const category = useSelector(state => state?.category);

  const { categoryList, loading, appErr, serverErr } = category;

  return (
    <>
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : appErr || serverErr ? (
        <h2 className="text-center text-3xl text-red-600">
          {serverErr} {serverErr}
        </h2>
      ) : categoryList?.length <= 0 ? (
        <h2 className="text-center text-3xl text-green-800">
          No category Found
        </h2>
      ) : (
        <div className="flex flex-col bg-gray-50 dark:bg-darkk-800   ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 h-screen dark:bg-darkk-800   ">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className=" overflow-hidden    ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-darkk-900">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left tracking-widest text-xs font-bold text-gray-900 dark:text-gray-200 uppercase  "
                      >
                        Author
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest"
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest"
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryList?.map(category => (
                      <tr className=" bg-gray-50 dark:bg-darkk-800">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={category?.user?.profilePhoto}
                                alt="category profile"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
                                {category?.user?.firstName}{" "}
                                {category?.user?.lastName}
                              </div>
                              <div className="text-sm font-serif  text-gray-600 dark:text-gray-400 tracking-widest">
                                {category?.user?.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-serif  text-gray-600 dark:text-gray-400 tracking-widest">
                          {category.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {<DateFormatter date={category?.createdAt} />}
                        </td>
                        <Link to={`/update-category/${category?._id}`}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <PencilAltIcon className="h-5 text-indigo-500" />
                          </td>
                        </Link>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryList;
