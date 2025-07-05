// import React, { useState } from "react";

// const Settings: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailAlerts, setEmailAlerts] = useState(true);
//   const [pushNotifications, setPushNotifications] = useState(false);
//   const [profileVisibility, setProfileVisibility] = useState(true);

//   const handleUpdateCredentials = () => {
//     console.log("Updating credentials:", { email, password });
//   };

//   const handleSavePreferences = () => {
//     console.log("Saving preferences:", { emailAlerts, pushNotifications, profileVisibility });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-montserrat-regular text-yankees-blue mb-6">Settings</h1>

//         {/* Account Preferences */}
//         <div className="mb-8">
//           <h2 className="text-xl font-montserrat-regular text-yankees-blue border-b pb-2 mb-4">Account Preferences</h2>
//           <div className="grid gap-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-montserrat-light text-yankees-blue mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-3 border rounded-lg shadow-sm font-montserrat-light focus:ring-2 focus:ring-yankees-blue focus:outline-none"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-montserrat-light text-yankees-blue mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 border rounded-lg shadow-sm font-montserrat-light focus:ring-2 focus:ring-yankees-blue focus:outline-none"
//                 placeholder="Enter your password"
//               />
//             </div>
//           </div>
//           <div className="mt-4 text-right">
//             <button
//               onClick={handleUpdateCredentials}
//               className="px-6 py-2 bg-yankees-blue text-white text-sm font-montserrat-light rounded-lg shadow-md hover:bg-yankees-blue focus:ring-2 focus:ring-yankees-blue w-full"
//             >
//               Update Credentials
//             </button>
//           </div>
//         </div>

//         {/* Notification Settings */}
//         <div className="mb-8">
//           <h2 className="text-xl font-montserrat-regular text-yankees-blue border-b pb-2 mb-4">Notification Settings</h2>
//           <div className="grid gap-4">
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="emailAlerts"
//                 checked={emailAlerts}
//                 onChange={(e) => setEmailAlerts(e.target.checked)}
//                 className="w-4 h-4  text-yankees-blue border-yankees-blue rounded focus:ring-yankees-blue"
//               />
//               <label htmlFor="emailAlerts" className="ml-2 text-sm font-montserrat-light text-yankees-blue">
//                 Email Alerts
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="pushNotifications"
//                 checked={pushNotifications}
//                 onChange={(e) => setPushNotifications(e.target.checked)}
//                 className="w-4 h-4 text-yankees-blue border-yankees-blue rounded focus:ring-yankees-blue"
//               />
//               <label htmlFor="pushNotifications" className="ml-2 text-sm font-montserrat-light text-yankees-blue">
//                 Push Notifications
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Profile Visibility */}
//         <div className="mb-8">
//           <h2 className="text-xl font-montserrat-regular text-yankees-blue border-b pb-2 mb-4">Profile Visibility</h2>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="profileVisibility"
//               checked={profileVisibility}
//               onChange={(e) => setProfileVisibility(e.target.checked)}
//               className="w-4 h-4 text-yankees-blue border-yankees-blue rounded focus:ring-yankees-blue"
//             />
//             <label htmlFor="profileVisibility" className="ml-2 text-sm font-montserrat-light text-yankees-blue">
//               Enable Profile Visibility
//             </label>
//           </div>
//         </div>

//         <div className="text-right">
//           <button
//             onClick={handleSavePreferences}
//             className="px-6 py-2 bg-yankees-blue text-white text-sm font-montserrat-light rounded-lg shadow-md hover:bg-yankees-blue focus:ring-2 focus:ring-yankees-blue w-full"
//           >
//             Save Preferences
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

// import React, { useState } from 'react';

// // const updateFields = {
// //   updateLoginCredentials: (email, password) => {
// //     console.log(`Email: ${email}, Password: ${password}`);
// //   },
// //   updateNotificationSettings: (emailAlerts, pushNotifications) => {
// //     console.log(`Email Alerts: ${emailAlerts}, Push Notifications: ${pushNotifications}`);
// //   },
// //   toggleProfileVisibility: (isPublic) => {
// //     console.log(`Profile Visibility: ${isPublic ? 'Public' : 'Private'}`);
// //   },
// // };

// const updateFields = {
//   updateLoginCredentials: (email: string, password: string) => {
//     console.log(`Email: ${email}, Password: ${password}`);
//   },
//   updateNotificationSettings: (emailAlerts: boolean, pushNotifications: boolean) => {
//     console.log(`Email Alerts: ${emailAlerts}, Push Notifications: ${pushNotifications}`);
//   },
//   toggleProfileVisibility: (isPublic: boolean) => {
//     console.log(`Profile Visibility: ${isPublic ? 'Public' : 'Private'}`);
//   },
// };


// const AccountSettings = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailAlerts, setEmailAlerts] = useState(false);
//   const [pushNotifications, setPushNotifications] = useState(false);
//   const [isPublic, setIsPublic] = useState(false);

//   const handleUpdateLoginCredentials = () => {
//     if (email && password) {
//       updateFields.updateLoginCredentials(email, password);
//       alert('Login credentials updated successfully');
//     } else {
//       alert('Please enter both email and password');
//     }
//   };

//   const handleUpdateNotificationSettings = () => {
//     updateFields.updateNotificationSettings(emailAlerts, pushNotifications);
//     alert('Notification settings updated');
//   };

//   const handleToggleProfileVisibility = () => {
//     setIsPublic((prev) => !prev);
//     updateFields.toggleProfileVisibility(!isPublic);
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-8">
//       {/* Account Preferences */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Account Preferences</h2>
//         <div className="space-y-6">
//           <div>
//             <label className="block text-md font-montserrat-extralight text-yankees-blue">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 p-3 w-full border border-gray-300 font-montserrat-extralight text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label className="block text-md font-montserrat-extralight text-yankees-blue">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-2 p-3 w-full border border-gray-300 font-montserrat-extralight text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             onClick={handleUpdateLoginCredentials}
//             className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
//           >
//             Update Login Credentials
//           </button>
//         </div>
//       </section>

//       {/* Notification Settings */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Notification Settings</h2>
//         <div className="space-y-6">
//           <div className="flex items-center">
//             <label className="text-md font-montserrat-extralight text-yankees-blue">Email Alerts:</label>
//             <input
//               type="checkbox"
//               checked={emailAlerts}
//               onChange={(e) => setEmailAlerts(e.target.checked)}
//               className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex items-center">
//             <label className="text-md font-montserrat-extralight text-yankees-blue">Push Notifications:</label>
//             <input
//               type="checkbox"
//               checked={pushNotifications}
//               onChange={(e) => setPushNotifications(e.target.checked)}
//               className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
          
//           <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Profile Visibility</h2>
//         <div className="flex items-center">
//           <label className="text-md font-montserrat-extralight text-yankees-blue">Public Profile:</label>
//           <input
//             type="checkbox"
//             checked={isPublic}
//             onChange={handleToggleProfileVisibility}
//             className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//           <button
//             onClick={handleUpdateNotificationSettings}
//             className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
//           >
//             Save Preferences
//           </button>
//         </div>
//       </section>

//       {/* Profile Visibility */}
//       {/* <section className="bg-white p-6 rounded-lg shadow-md"> */}
        
//       {/* </section> */}
//     </div>
//   );
// };

// export default AccountSettings;




import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setUserData } from '../store/userSlice';
import { updateUserSettings, UpdateSettingsPayload } from '../api/user';
import { toast } from 'react-toastify';

const AccountSettings = () => {
  console.log('AccountSettings component rendered');
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user);
  console.log('Current user from Redux:', currentUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  // const [isPublic, setIsPublic] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log('Initial state for form fields:', { email, password, emailAlerts, inAppNotifications });

  // Load existing user data from Redux when component mounts or currentUser changes
  useEffect(() => {
    console.log('useEffect triggered for currentUser change.');
    if (currentUser && currentUser.isAuthenticated) {
      console.log('User is authenticated. Populating form fields from Redux.');
      setEmail(currentUser.email || '');
      // Password should generally not be pre-filled from Redux for security reasons
      // setPassword(''); // Keep it empty or null
      console.log('Email set to:', currentUser.email);

      // Set notification settings from Redux
      const currentEmailAlerts = currentUser.notificationsSettings?.email ?? true;
      const currentInAppNotifications = currentUser.notificationsSettings?.inApp ?? true;
      setEmailAlerts(currentEmailAlerts);
      setInAppNotifications(currentInAppNotifications);
      console.log('Notification settings loaded from Redux:', { email: currentEmailAlerts, inApp: currentInAppNotifications });

      // Set profile visibility (if added to schema)
      // setIsPublic(currentUser.isPublic ?? true); // Uncomment if you add `isPublic` to UserState/schema
      // console.log('isPublic loaded from Redux:', currentUser.isPublic); // Uncomment when implemented
    } else {
      console.log('User is not authenticated or currentUser object is null/undefined.');
    }
  }, [currentUser]);


  const handleUpdateLoginCredentials = async () => {
    console.log('handleUpdateLoginCredentials called.');
    setIsSubmitting(true);
    console.log('isSubmitting set to true.');
    try {
      const payload: UpdateSettingsPayload = {};
      console.log('Initial payload for login credentials:', payload);

      if (email && email !== currentUser.email) {
        payload.email = email;
        console.log('Email changed. Added to payload:', email);
      } else if (email && email === currentUser.email) {
        console.log('Email not changed. Not adding to payload.');
      } else {
        console.log('Email field is empty. Not adding to payload.');
      }

      if (password) {
        payload.password = password;
        console.log('Password entered. Added to payload (hashed on backend):', '********');
      } else {
        console.log('Password field is empty. Not adding to payload.');
      }

      if (Object.keys(payload).length === 0) {
        toast.info("No login credentials to update.");
        console.log("No login credentials to update. Returning.");
        setIsSubmitting(false);
        return;
      }

      console.log('Sending update login credentials API call with payload:', payload);
      const response = await updateUserSettings(currentUser._id, payload);
      console.log('API response for login credentials update:', response);

      dispatch(setUserData(response.user));
      console.log('Redux user data updated with new login credentials.');
      setPassword('');
      console.log('Password field cleared.');
      toast.success('Login credentials updated successfully!');
      console.log("Login credentials updated successfully!");
    } catch (err: any) {
      toast.error(err.message || 'Failed to update login credentials.');
      console.error("Login update error:", err);
      console.error("Full error object for login update:", err);
    } finally {
      setIsSubmitting(false);
      console.log('isSubmitting set to false.');
    }
  };

  const handleUpdateNotificationSettings = async () => {
    console.log('handleUpdateNotificationSettings called.');
    setIsSubmitting(true);
    console.log('isSubmitting set to true.');
    try {
      const payload: UpdateSettingsPayload = {
        notificationsSettings: {
          email: emailAlerts,
          inApp: inAppNotifications,
        },
      };
      console.log('Sending update notification settings API call with payload:', payload);

      const response = await updateUserSettings(currentUser._id, payload);
      console.log('API response for notification settings update:', response);

      dispatch(setUserData(response.user));
      console.log('Redux user data updated with new notification settings.');
      toast.success('Notification settings updated!');
      console.log("Notification settings updated!");
    } catch (err: any) {
      toast.error(err.message || 'Failed to update notification settings.');
      console.error("Notification update error:", err);
      console.error("Full error object for notification update:", err);
    } finally {
      setIsSubmitting(false);
      console.log('isSubmitting set to false.');
    }
  };

  // const handleToggleProfileVisibility = async () => {
  //   console.log('handleToggleProfileVisibility called. Current isPublic:', isPublic);
  //   const newIsPublic = !isPublic;
  //   setIsPublic(newIsPublic);
  //   console.log('isPublic toggled to:', newIsPublic);

    // If you add `isPublic` to backend and Redux, uncomment the following:
    // setIsSubmitting(true);
    // console.log('isSubmitting set to true for profile visibility.');
    // try {
    //   console.log('Sending update profile visibility API call with newIsPublic:', newIsPublic);
    //   const response = await updateUserSettings(currentUser._id, { isPublic: newIsPublic });
    //   console.log('API response for profile visibility update:', response);
    //   dispatch(setUserData(response.user));
    //   console.log('Redux user data updated with new profile visibility.');
    //   toast.success(`Profile set to ${newIsPublic ? 'Public' : 'Private'}`);
    //   console.log(`Profile set to ${newIsPublic ? 'Public' : 'Private'}`);
    // } catch (err: any) {
    //   toast.error(err.message || 'Failed to toggle profile visibility.');
    //   console.error("Profile visibility update error:", err);
    //   console.error("Full error object for profile visibility update:", err);
    //   setIsPublic(!newIsPublic); // Revert local state if API call fails
    //   console.log('API call failed, isPublic reverted to:', !newIsPublic);
    // } finally {
    //   setIsSubmitting(false);
    //   console.log('isSubmitting set to false for profile visibility.');
    // }
  // };

  console.log('Rendering AccountSettings component. Current form states:', { email, password, emailAlerts, inAppNotifications, isSubmitting });

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Account Preferences */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Account Preferences</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-md font-montserrat-extralight text-yankees-blue">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log('Email input changed to:', e.target.value);
              }}
              className="mt-2 p-3 w-full border border-gray-300 font-montserrat-extralight text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-md font-montserrat-extralight text-yankees-blue">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log('Password input changed.');
              }}
              className="mt-2 p-3 w-full border border-gray-300 font-montserrat-extralight text-yankees-blue rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>
          <button
            onClick={handleUpdateLoginCredentials}
            className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Login Credentials'}
          </button>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Notification Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <label className="text-md font-montserrat-extralight text-yankees-blue">Email Alerts:</label>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => {
                setEmailAlerts(e.target.checked);
                console.log('Email Alerts checkbox changed to:', e.target.checked);
              }}
              className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <label className="text-md font-montserrat-extralight text-yankees-blue">In-App Notifications:</label>
            <input
              type="checkbox"
              checked={inAppNotifications}
              onChange={(e) => {
                setInAppNotifications(e.target.checked);
                console.log('In-App Notifications checkbox changed to:', e.target.checked);
              }}
              className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-6">Profile Visibility</h2>
          <div className="flex items-center">
            <label className="text-md font-montserrat-extralight text-yankees-blue">Public Profile:</label>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={handleToggleProfileVisibility}
              className="ml-4 h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
          <button
            onClick={handleUpdateNotificationSettings}
            className="mt-4 w-full bg-yankees-blue font-montserrat-light text-white py-3 rounded-md hover:bg-yankees-blue transition duration-300 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Preferences'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;