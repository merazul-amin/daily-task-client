import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';

const Profile = ({ setIsProfileOpen }) => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        setIsProfileOpen(false);
        logOut();
    }
    return (

        <div className="flex items-center w-full justify-center">

            <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src={user?.photoURL ? user?.photoURL : 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png'} alt="John Doe" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user?.displayName ? user?.displayName : 'No Name Given'}</h3>

                        <table className="text-xs my-3">
                            <tbody><tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Email:-</td>
                                <td className="px-2 py-2">{user?.email ? user?.email : ''}</td>
                            </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td className="px-2 py-2">Not Available</td>
                                </tr>
                                <tr className='text-center'>
                                    <td >
                                        <button onClick={handleLogOut} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log Out</button>
                                    </td>
                                </tr>

                            </tbody></table>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;