import React from 'react';
import topImg from '../../../assets/Working remotely-bro.png';
const TopBanner = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Something new in life.
                            </p>
                        </div>
                        <h2 className="max-w-lg text-white mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                            Store the
                            <br className="hidden md:block" />
                            daily works{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                you want to do.
                            </span>
                        </h2>
                        <p className="text-base text-green-400 font-bold md:text-lg">
                            From here you can set your task for future reminder. This will be very helpful for your time management. We are sure this app will help you a lot for your easy life. <br />
                            Have a good time in our app.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Task</button>

                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src={topImg}
                    alt=""
                />
            </div>
        </div>
    );
};

export default TopBanner;