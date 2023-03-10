import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-toastify';
const MyTask = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, isError, data: tasks = [], error, refetch } = useQuery({
        queryKey: ['userTasks'],
        queryFn: () => fetch(`http://localhost:5000/userTasks/${user?.email}`)
            .then(res => res.json())
    })
    const handleUpdate = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/userTasks/${id}`,
            { method: 'DELETE' }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.error('Task Deleted');
                    refetch();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleComplete = (id) => {
        fetch(`http://localhost:5000/userTasks/${id}`,
            { method: 'PATCH' }
        ).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Completed.')
                    refetch();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='w-[90%] mx-auto mb-60'>
            <h1 className='text-4xl text-white text-center my-5'>My Tasks</h1>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Task name
                            </th>

                            <th scope="col" className="py-3 px-6">

                            </th>
                            <th scope="col" className="py-3 px-6">

                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.length > 0 && tasks.map(task => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.taskName}
                                </th>

                                <td className="py-4 px-6">
                                    <button onClick={() => handleUpdate(task._id)} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                </td>
                                <td className="py-4 px-6">
                                    <button onClick={() => handleDelete(task._id)} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    {
                                        task.isComplete ? 'Completed' : <button onClick={() => handleComplete(task._id)} type="button" className="py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Complete</button>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyTask;