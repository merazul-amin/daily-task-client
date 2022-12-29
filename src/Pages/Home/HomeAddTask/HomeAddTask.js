import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import addTask from '../../../assets/Work in progress-rafiki.png';
import { AuthContext } from '../../../contexts/UserContext';
const HomeAddTask = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    //function for add task in db 

    const addToDb = (task) => {
        const taskDetails = {
            taskName: task,
            userEmail: user?.email,
            isComplete: false
        }
        fetch('http://localhost:5000/user-task', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(taskDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task added.')
                    navigate('/myTask');
                }
            })
            .catch(err => console.log(err))

    }



    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            if (!user?.email) {
                navigate('/logIn')
                return toast.error('Please LogIn first.')
            }
            const taskName = e.target.value;
            addToDb(taskName);

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskName = e.target.task.value;

        if (!user?.email) {
            navigate('/logIn')
            return toast.error('Please LogIn first.')
        }
        addToDb(taskName);

    }
    return (
        <div className='w-[90%] mx-auto'>
            <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
                <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:bottom-0 lg:left-0 lg:items-center">
                    <img
                        src={addTask}
                        className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                        alt=""
                    />
                </div>
                <div className="relative flex justify-end  mx-auto  lg:max-w-screen-xl">
                    <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0 lg:w-1/2">
                        <div className=" mb-6">
                            <div>

                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Write Your Task Name
                            </h2>

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="">
                                <input
                                    placeholder="Task Name"
                                    required
                                    name='task'
                                    type="text"
                                    onKeyDown={handleKeyDown}
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />

                            </div>
                            <div className="flex items-center mt-4">
                                <button type="submit" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add to Task</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAddTask;