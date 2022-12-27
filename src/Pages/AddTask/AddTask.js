import React from 'react';
import addTaskImg from '../../assets/Task-cuate.svg';

const AddTask = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-around lg:flex-row">
                <div className="mb-12 lg:max-w-lg lg:pr-5 h-full lg:mb-0">
                    <div class="">
                        <form class="bg-white shadow-md h-full rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Add
                                </button>

                            </div>
                        </form>

                    </div>

                </div>

                <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                    <img src={addTaskImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddTask;