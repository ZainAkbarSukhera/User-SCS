// import { useState } from 'react';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import React from 'react';

// const interestsOptions = [
//   "Calligraphy",
//   "Drawing & Illustration",
//   "Graphics",
//   "Mixed Media",
//   "Painting",
//   "Photography",
//   "Printmaking",
//   "Sculpture",
// ];

// const EditProfile: React.FC = () => {
//   const [images, setImages] = useState<ImageListType>([]);
//   const [formData, setFormData] = useState({
//     FullNameEnglish: "",
//     FullNameArabic: "",
//     Username: "",
//     MobileNumber: "",
//     Email: "",
//     City: "",
//     Country: "",
//   });
//   const [interests, setInterests] = useState<string[]>([]);

//   const [socials, setSocials] = useState({
//     LinkedIn: "",
//     Behance: "",
//     Facebook: "",
//     Instagram: "",
//   });

//   const maxNumber = 69;

//   const onChange = (imageList: ImageListType) => {
//     setImages(imageList);
//   };

//   const handleInterestClick = (interest: string) => {
//     setInterests((prev) =>
//       prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
//     );
//   };

//   return (
//     <div>
//       <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
//       <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//         <div className="flex flex-col sm:flex-row">
//           <div className="flex flex-col items-center">
//             <div className="relative mr-6">
//               <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
//                 {({ imageList, onImageUpload }) => (
//                   <div className="upload__image-wrapper">
//                     {imageList.length > 0 ? (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//                         <img
//                           src={imageList[0].dataURL}
//                           alt="Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     ) : (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//                         <img
//                           src="/assets/images/default-profile.png"
//                           alt=""
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       className="btn bg-yankees-blue text-white font-montserrat-light  mt-3"
//                       onClick={onImageUpload}
//                     >
//                       Upload Profile Picture
//                     </button>
//                   </div>
//                 )}
//               </ImageUploading>
//             </div>
//           </div>
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Form fields */}
//             {Object.keys(formData).map((key) => (
//               <div className='text-yankees-blue font-montserrat-extralight' key={key}>
//                 <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
//                 <input
//                   id={key}
//                   type="text"
//                   value={formData[key as keyof typeof formData]}
//                   onChange={(e) =>
//                     setFormData({ ...formData, [key]: e.target.value })
//                   }
//                   className="form-input text-yankees-blue font-montserrat-light"
//                 />
//               </div>
//             ))}

//             {/* Interests */}
//             <div>
//               <label className="block text-yankees-blue font-montserrat-extralight mb-2">Interests</label>
//               <div className="flex flex-wrap gap-2">
//                 {interestsOptions.map((interest) => (
//                   <button
//                     type="button"
//                     key={interest}
//                     onClick={() => handleInterestClick(interest)}
//                     className={`px-4 py-2 rounded-full text-sm font-montserrat-light ${
//                       interests.includes(interest)
//                         ? "bg-yankees-blue text-white"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {interest}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Social Form */}
//             <div className="flex flex-col sm:col-span-2">
//               <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 {/* LinkedIn */}
//                 <div className="flex flex-col">
//                   <label htmlFor="LinkedIn" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
//                   <input
//                     type="text"
//                     id="LinkedIn"
//                     placeholder=""
//                     value={socials.LinkedIn}
//                     onChange={(e) => setSocials({ ...socials, LinkedIn: e.target.value })}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Behance */}
//                 <div className="flex flex-col">
//                   <label htmlFor="Behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
//                   <input
//                     type="text"
//                     id="Behance"
//                     placeholder=""
//                     value={socials.Behance}
//                     onChange={(e) => setSocials({ ...socials, Behance: e.target.value })}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Facebook */}
//                 <div className="flex flex-col">
//                   <label htmlFor="Facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
//                   <input
//                     type="text"
//                     id="Facebook"
//                     placeholder=""
//                     value={socials.Facebook}
//                     onChange={(e) => setSocials({ ...socials, Facebook: e.target.value })}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Instagram */}
//                 <div className="flex flex-col">
//                   <label htmlFor="Instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
//                   <input
//                     type="text"
//                     id="Instagram"
//                     placeholder=""
//                     value={socials.Instagram}
//                     onChange={(e) => setSocials({ ...socials, Instagram: e.target.value })}
//                     className="form-input"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="sm:col-span-2 mt-3 justify-items-center">
//               <button type="button" className="btn bg-yankees-blue text-white font-montserrat-light w-full">
//                 Save
//               </button>
//             </div>
//           </div>
          
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

///////////////////////////////////////////////////////////////////////////////////////////////

// import { useState, useEffect, useCallback } from 'react'; // Added useCallback
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
// import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
// import { updateUserProfile, AuthSuccessData } from '../api/user';
// import { City, Country, ICountry } from 'country-state-city';
// import { uploadFileToS3 } from '../utils/s3Uploader';
// import { toast } from 'react-toastify';

// const interestsOptions = [
//   "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
//   "Painting", "Photography", "Printmaking", "Sculpture",
// ];

// // Helper to get unique city names
// const getUniqueCities = (countryCode: string) => {
//   const cities = City.getCitiesOfCountry(countryCode);
//   if (!cities) {
//     return [];
//   }
//   const uniqueCityNames = new Set<string>();
//   const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
//   cities.forEach(city => {
//     if (!uniqueCityNames.has(city.name)) {
//       uniqueCityNames.add(city.name);
//       uniqueCitiesArray.push(city);
//     }
//   });
//   return uniqueCitiesArray;
// };

// const EditProfile: React.FC = () => {
//   const dispatch = useDispatch();
//   const currentUser = useSelector((state: RootState) => state.user);

//   const [images, setImages] = useState<ImageListType>([]);
//   const [formData, setFormData] = useState({
//     fullNameEnglish: "",
//     fullNameArabic: "",
//     username: "",
//     mobileNumber: "",
//     email: "",
//     city: "",
//     country: "",
//   });
//   const [interests, setInterests] = useState<string[]>([]);
//   const [socials, setSocials] = useState<UserSocialMediaLinks>({
//     linkedin: "",
//     behance: "",
//     facebook: "",
//     instagram: "",
//     // twitter: "", // Included twitter as it's common and was commented out
//   });
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   // Load existing user data from Redux when component mounts or currentUser changes
//   useEffect(() => {
//     if (currentUser && currentUser.isAuthenticated) {
//       setFormData({
//         fullNameEnglish: currentUser.fullNameEnglish || "",
//         fullNameArabic: currentUser.fullNameArabic || "",
//         username: currentUser.username || "",
//         mobileNumber: currentUser.mobileNumber || "",
//         email: currentUser.email || "",
//         city: currentUser.city || "",
//         country: currentUser.country || "",
//       });
//       setInterests(currentUser.interests || []);

//       setSocials({
//         linkedin: currentUser.socialMediaLinks?.linkedin || "",
//         behance: currentUser.socialMediaLinks?.behance || "",
//         facebook: currentUser.socialMediaLinks?.facebook || "",
//         instagram: currentUser.socialMediaLinks?.instagram || "",
//         // twitter: currentUser.socialMediaLinks?.twitter || "", // Ensure twitter is loaded
//       });

//       // If a profile picture exists in Redux, set it for ImageUploading
//       if (currentUser.profilePicture) {
//         setImages([{ dataURL: currentUser.profilePicture }]);
//       } else {
//         // If no profile picture, ensure images state is empty to show default
//         setImages([]);
//       }
//     }
//   }, [currentUser]);

//   const maxNumber = 1;
//   const countries = Country.getAllCountries();

//   // This onChange immediately displays the *local* file preview
//   const onChange = useCallback((imageList: ImageListType) => {
//     setImages(imageList);
//   }, []); // useCallback for memoization

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
//   };

//   const handleInterestClick = (interest: string) => {
//     setInterests((prev) =>
//       prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
//     );
//   };

//   const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setIsSubmitting(true);

//     if (!currentUser._id) {
//       setError("User ID not found. Cannot update profile.");
//       setIsSubmitting(false);
//       return;
//     }

//     const updateData = new FormData();

//     // Append form data fields
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value !== null && value !== undefined && value !== '') {
//         updateData.append(key, value);
//       }
//     });

//     // Append interests
//     if (interests.length > 0) {
//       updateData.append('interests', JSON.stringify(interests));
//     } else {
//       updateData.append('interests', '[]');
//     }

//     // Append social links object as a JSON string
//     updateData.append('socialMediaLinks', JSON.stringify(socials));

//     // let finalProfilePictureUrl: string | null = currentUser.profilePicture; // Start with current URL

//     // // **Handle Profile Picture Upload to S3 Here**
//     // // Check if there's a NEW image file selected by the user
//     // if (images.length > 0 && images[0].file) {
//     //   toast.info("Uploading profile picture...");
//     //   try {
//     //     const uploadedImage = await uploadFileToS3(images[0].file, 'profile-pictures'); // Use a dedicated folder
//     //     if (uploadedImage.location) {
//     //       finalProfilePictureUrl = uploadedImage.location;
//     //       // **CRUCIAL FIX: Update images state with the S3 URL for immediate display**
//     //       setImages([{ dataURL: finalProfilePictureUrl }]);
//     //       toast.success("Profile picture uploaded to S3!");
//     //     } else {
//     //       setError("Failed to upload profile picture to S3. Please try again.");
//     //       toast.error("Failed to upload profile picture.");
//     //       setIsSubmitting(false);
//     //       return; // Stop submission if S3 upload fails
//     //     }
//     //   } catch (uploadErr) {
//     //     console.error("Error uploading profile picture to S3:", uploadErr);
//     //     setError("An error occurred during profile picture upload.");
//     //     toast.error("An error occurred during profile picture upload.");
//     //     setIsSubmitting(false);
//     //     return; // Stop submission if S3 upload fails
//     //   }
//     // } else if (images.length === 0 && currentUser.profilePicture) {
//     //   // Scenario: User *removed* the profile picture that was previously there
//     //   finalProfilePictureUrl = null;
//     // } else if (images.length === 0 && !currentUser.profilePicture) {
//     //   // Scenario: No picture was ever set and none is uploaded now
//     //   finalProfilePictureUrl = null;
//     // }


//     // // Append the final profilePictureUrl (either existing, new S3 URL, or null for removal)
//     // if (finalProfilePictureUrl) {
//     //   updateData.append('profilePicture', finalProfilePictureUrl);
//     // } else {
//     //   // If profile picture was removed or never set, ensure backend gets an empty string or null
//     //   updateData.append('profilePicture', ''); // Send empty string for backend to set as null
//     // }

//       let finalProfilePictureUrl: string | null = currentUser.profilePicture; // Start with current URL

//     // **Handle Profile Picture Upload to S3 Here**
//     // Check if there's a NEW image file selected by the user
//     if (images.length > 0 && images[0].file) {
//       toast.info("Uploading profile picture...");
//       console.log("Checking if image exists");
//       try {
//         console.log("Uploading image.");
//         const uploadedImage = await uploadFileToS3(images[0].file, 'profile-pictures'); // Use a dedicated folder
//         console.log("Image uploaded", uploadedImage);
//         if (uploadedImage.location) {
//           finalProfilePictureUrl = uploadedImage.location;
//           // **CRUCIAL FIX: Update images state with the S3 URL for immediate display**
//           setImages([{ dataURL: finalProfilePictureUrl }]); // This is correctly placed
//           toast.success("Profile picture uploaded to S3!");
//           console.log("Profile picture uploaded to S3!");
//         } else {
//           setError("Failed to upload profile picture to S3. Please try again.");
//           toast.error("Failed to upload profile picture.");
//           console.log("Failed to upload profile picture.");
//           setIsSubmitting(false);
//           return; // Stop submission if S3 upload fails
//         }
//       } catch (uploadErr) {
//         console.error("Error uploading profile picture to S3:", uploadErr);
//         setError("An error occurred during profile picture upload.");
//         toast.error("An error occurred during profile picture upload.");
//         setIsSubmitting(false);
//         return; // Stop submission if S3 upload fails
//       }
//     } else if (images.length === 0 && currentUser.profilePicture) {
//       // Scenario: User *removed* the profile picture that was previously there
//       finalProfilePictureUrl = null;
//     } else if (images.length === 0 && !currentUser.profilePicture) {
//       // Scenario: No picture was ever set and none is uploaded now
//       finalProfilePictureUrl = null;
//     }

//     // Append the final profilePictureUrl (either existing, new S3 URL, or null for removal)
//     if (finalProfilePictureUrl) {
//       updateData.append('profilePicture', finalProfilePictureUrl);
//     } else {
//       // If profile picture was removed or never set, ensure backend gets an empty string or null
//       updateData.append('profilePicture', ''); // Send empty string for backend to set as null
//     }

 
//     try {
//       // Send the entire FormData to your backend
//       const response = await updateUserProfile(currentUser._id, updateData);

//       const responseData: AuthSuccessData = (response as any).data || response;

//       if (responseData && responseData.user) {
//         // Update Redux state with the new user data from the API response
//         dispatch(setUserData({
//           _id: responseData.user._id || '',
//           fullNameEnglish: responseData.user.fullNameEnglish || '',
//           fullNameArabic: responseData.user.fullNameArabic || '',
//           username: responseData.user.username || '',
//           email: responseData.user.email,
//           mobileNumber: responseData.user.mobileNumber || '',
//           role: responseData.user.role || '',
//           country: responseData.user.country || '',
//           city: responseData.user.city || '',
//           interests: responseData.user.interests || [],
//           profilePicture: responseData.user.profilePicture || null,
//           socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
//         }));
//         setSuccess("Profile updated successfully!");
//         toast.success("Profile updated successfully!");

//         // This line is now primarily for consistency, as `setImages` with S3 URL happened earlier
//         // if (responseData.user.profilePicture) {
//         //     setImages([{ dataURL: responseData.user.profilePicture }]);
//         // } else {
//         //    setImages([]); // If picture was removed
//         // }

//       } else {
//         setError("Profile updated, but user data was not returned in the response.");
//         toast.error("Profile updated, but data not returned.");
//       }
//     } catch (err: any) {
//       const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
//       setError(msg);
//       toast.error(msg);
//       console.error("Profile update caught an error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <form
//         className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
//         onSubmit={handleSubmit}
//       >
//         <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
//         <div className="flex flex-col sm:flex-row">
//           <div className="flex flex-col items-center">
//             <div className="relative mr-6">
//               <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
//                 {({ imageList, onImageUpload }) => (
//                   <div className="upload__image-wrapper">
//                     {imageList.length > 0 ? (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
//                         <img
//                           src={imageList[0].dataURL} // This now gets updated with S3 URL directly
//                           alt="Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     ) : (
//                       <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
//                         <img
//                           src="/assets/images/default-profile.png"
//                           alt="Default Profile"
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     )}
//                     <button
//                       type="button"
//                       className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
//                       onClick={onImageUpload}
//                     >
//                       Upload Profile Picture
//                     </button>
//                   </div>
//                 )}
//               </ImageUploading>
//             </div>
//           </div>
//           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Form fields */}
//             {Object.keys(formData).map((key) => (
//               <div className='text-yankees-blue font-montserrat-extralight' key={key}>
//                 <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
//                 {key === 'country' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                   >
//                     <option value="">Select your Country</option>
//                     {countries.map((country: ICountry) => (
//                       <option key={country.isoCode} value={country.isoCode}>
//                         {country.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : key === 'city' ? (
//                   <select
//                     id={key}
//                     name={key}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-select text-yankees-blue font-montserrat-light"
//                     disabled={!formData.country}
//                   >
//                     <option value="">Select your City</option>
//                     {citiesOfSelectedCountry.map((item) => (
//                       <option key={item.name} value={item.name}>
//                         {item.name}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <input
//                     id={key}
//                     name={key}
//                     type={key === 'email' ? 'email' : 'text'}
//                     value={formData[key as keyof typeof formData]}
//                     onChange={handleInputChange}
//                     className="form-input text-yankees-blue font-montserrat-light"
//                   />
//                 )}
//               </div>
//             ))}

//             {/* Interests */}
//             <div>
//               <label className="block text-yankees-blue font-montserrat-extralight mb-2">Interests</label>
//               <div className="flex flex-wrap gap-2">
//                 {interestsOptions.map((interest) => (
//                   <button
//                     type="button"
//                     key={interest}
//                     onClick={() => handleInterestClick(interest)}
//                     className={`px-4 py-2 rounded-full text-sm font-montserrat-light ${
//                       interests.includes(interest)
//                         ? "bg-yankees-blue text-white"
//                         : "bg-gray-200 text-gray-700"
//                     }`}
//                   >
//                     {interest}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Social Form */}
//             <div className="flex flex-col sm:col-span-2">
//               <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 {/* LinkedIn */}
//                 <div className="flex flex-col">
//                   <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
//                   <input
//                     type="text"
//                     id="linkedin"
//                     name="linkedin"
//                     placeholder=""
//                     value={socials.linkedin || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Behance */}
//                 <div className="flex flex-col">
//                   <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
//                   <input
//                     type="text"
//                     id="behance"
//                     name="behance"
//                     placeholder=""
//                     value={socials.behance || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Facebook */}
//                 <div className="flex flex-col">
//                   <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
//                   <input
//                     type="text"
//                     id="facebook"
//                     name="facebook"
//                     placeholder=""
//                     value={socials.facebook || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Instagram */}
//                 <div className="flex flex-col">
//                   <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
//                   <input
//                     type="text"
//                     id="instagram"
//                     name="instagram"
//                     placeholder=""
//                     value={socials.instagram || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div>

//                 {/* Twitter */}
//                 {/* <div className="flex flex-col">
//                   <label htmlFor="twitter" className="text-sm text-yankees-blue font-montserrat-extralight">Twitter</label>
//                   <input
//                     type="text"
//                     id="twitter"
//                     name="twitter"
//                     placeholder=""
//                     value={socials.twitter || ''}
//                     onChange={handleSocialsChange}
//                     className="form-input"
//                   />
//                 </div> */}
//               </div>
//             </div>

//             <div className="sm:col-span-2 mt-3 justify-items-center">
//               {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
//               {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
//               <button
//                 type="submit"
//                 className="btn bg-yankees-blue text-white font-montserrat-light w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Saving...' : 'Save'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

/////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect, useCallback } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setUserData, SocialMediaLinks as UserSocialMediaLinks } from '../store/userSlice';
import { updateUserProfile, AuthSuccessData } from '../api/user';
import { City, Country, ICountry } from 'country-state-city';
import { uploadFileToS3 } from '../utils/s3Uploader';
import { toast } from 'react-toastify';

const interestsOptions = [
  "Calligraphy", "Drawing & Illustration", "Graphics", "Mixed Media",
  "Painting", "Photography", "Printmaking", "Sculpture",
];

// Helper to get unique city names
const getUniqueCities = (countryCode: string) => {
  const cities = City.getCitiesOfCountry(countryCode);
  if (!cities) {
    return [];
  }
  const uniqueCityNames = new Set<string>();
  const uniqueCitiesArray: { name: string; stateCode?: string }[] = [];
  cities.forEach(city => {
    if (!uniqueCityNames.has(city.name)) {
      uniqueCityNames.add(city.name);
      uniqueCitiesArray.push(city);
    }
  });
  return uniqueCitiesArray;
};

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user);

  // State variables for simplified image handling
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullNameEnglish: "",
    fullNameArabic: "",
    username: "",
    mobileNumber: "",
    email: "",
    city: "",
    country: "",
  });
  const [interests, setInterests] = useState<string[]>([]);
  const [socials, setSocials] = useState<UserSocialMediaLinks>({
    linkedin: "",
    behance: "",
    facebook: "",
    instagram: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Load existing user data from Redux when component mounts or currentUser changes
  useEffect(() => {
    if (currentUser && currentUser.isAuthenticated) {

       console.log("Current User data from Redux:", currentUser); // <-- Add this line
      console.log("Social Media Links from Redux:", currentUser.socialMediaLinks); // <-- And this one

      setFormData({
        fullNameEnglish: currentUser.fullNameEnglish || "",
        fullNameArabic: currentUser.fullNameArabic || "",
        username: currentUser.username || "",
        mobileNumber: currentUser.mobileNumber || "",
        email: currentUser.email || "",
        city: currentUser.city || "",
        country: currentUser.country || "",
      });
      setInterests(currentUser.interests || []);

       setSocials({
          linkedin: currentUser.socialMediaLinks?.linkedin || "",
          behance: currentUser.socialMediaLinks?.behance || "",
          facebook: currentUser.socialMediaLinks?.facebook || "",
          instagram: currentUser.socialMediaLinks?.instagram || "",
        });

      // Set initial preview if a profile picture exists in Redux
      if (currentUser.profilePicture) {
        setProfilePicturePreview(currentUser.profilePicture);
      } else {
        setProfilePicturePreview(null);
      }
      // Reset profilePictureFile, as this is loading existing data, not a new selection
      setProfilePictureFile(null);
    }
  }, [currentUser]);

  const maxNumber = 1;
  const countries = Country.getAllCountries();

  // This onChange now directly captures the file and sets the preview
  const onChange = useCallback((imageList: ImageListType) => {
    if (imageList.length > 0) {
      const selectedImage = imageList[0];
      setProfilePicturePreview(selectedImage.dataURL || null); // For displaying preview
      setProfilePictureFile(selectedImage.file || null); // Capture the actual file for upload
    } else {
      // User removed the image using image-uploading's built-in remove/replace logic
      setProfilePicturePreview(null);
      setProfilePictureFile(null);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocials((prev) => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const handleInterestClick = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const citiesOfSelectedCountry = formData.country ? getUniqueCities(formData.country) : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    if (!currentUser._id) {
      setError("User ID not found. Cannot update profile.");
      setIsSubmitting(false);
      return;
    }

    const updateData = new FormData();

    // Append form data fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        updateData.append(key, value);
      }
    });

    // Append interests
    if (interests.length > 0) {
      updateData.append('interests', JSON.stringify(interests));
    } else {
      updateData.append('interests', '[]');
    }

    // Append social links object as a JSON string
    updateData.append('socialMediaLinks', JSON.stringify(socials));

    let finalProfilePictureUrl: string | null = currentUser.profilePicture; // Start with current URL

    // **Handle Profile Picture Upload to S3 Here**
    // Check if there's a NEW image file selected by the user using the new state variable
    if (profilePictureFile) { // Check if a new file was selected
      toast.info("Uploading profile picture...");
      console.log("Attempting to upload new profile picture to S3.");
      try {
        const uploadedImage = await uploadFileToS3(profilePictureFile, 'profile-pictures'); // Use the captured file
        console.log("S3 Upload response:", uploadedImage);
        if (uploadedImage.location) {
          finalProfilePictureUrl = uploadedImage.location;
          // Update the preview state immediately with the S3 URL
          setProfilePicturePreview(finalProfilePictureUrl);
          // Clear the file state as it's now uploaded
          setProfilePictureFile(null); // This is important: clear the file after upload
          toast.success("Profile picture uploaded to S3!");
          console.log("Profile picture uploaded to S3! URL:", finalProfilePictureUrl);
        } else {
          setError("Failed to upload profile picture to S3. Please try again.");
          toast.error("Failed to upload profile picture.");
          setIsSubmitting(false);
          return; // Stop submission if S3 upload fails
        }
      } catch (uploadErr) {
        console.error("Error uploading profile picture to S3:", uploadErr);
        setError("An error occurred during profile picture upload.");
        toast.error("An error occurred during profile picture upload.");
        setIsSubmitting(false);
        return; // Stop submission if S3 upload fails
      }
    } else if (profilePicturePreview === null && currentUser.profilePicture) {
        // Scenario: User had a picture, but removed it (profilePicturePreview became null)
        finalProfilePictureUrl = null;
        console.log("Profile picture removed by user.");
    } else if (profilePicturePreview === null && !currentUser.profilePicture) {
        // Scenario: No picture was ever set and none is uploaded now
        finalProfilePictureUrl = null;
        console.log("No profile picture was ever set, and none is being uploaded.");
    }
    // If profilePictureFile is null and profilePicturePreview is not null, it means no new file was selected,
    // and the existing picture is being kept. In this case, finalProfilePictureUrl already holds currentUser.profilePicture.


    // Append the final profilePictureUrl (either existing, new S3 URL, or null for removal)
    if (finalProfilePictureUrl) {
      updateData.append('profilePicture', finalProfilePictureUrl);
      console.log("Appending profilePicture to FormData:", finalProfilePictureUrl);
    } else {
      updateData.append('profilePicture', ''); // Send empty string for backend to set as null
      console.log("Appending empty string for profilePicture to FormData (removal/none).");
    }

    try {
      // Send the entire FormData to your backend
      const response = await updateUserProfile(currentUser._id, updateData);

      const responseData: AuthSuccessData = (response as any).data || response;

      if (responseData && responseData.user) {
        // Update Redux state with the new user data from the API response
        dispatch(setUserData({
          _id: responseData.user._id || '',
          fullNameEnglish: responseData.user.fullNameEnglish || '',
          fullNameArabic: responseData.user.fullNameArabic || '',
          username: responseData.user.username || '',
          email: responseData.user.email,
          mobileNumber: responseData.user.mobileNumber || '',
          role: responseData.user.role || '',
          country: responseData.user.country || '',
          city: responseData.user.city || '',
          interests: responseData.user.interests || [],
          profilePicture: responseData.user.profilePicture || null,
          socialMediaLinks: responseData.user.socialMediaLinks || { instagram: '', behance: '', linkedin: '', facebook: '' },
        }));
        setSuccess("Profile updated successfully!");
        toast.success("Profile updated successfully!");

      } else {
        setError("Profile updated, but user data was not returned in the response.");
        toast.error("Profile updated, but data not returned.");
      }
    } catch (err: any) {
      const msg = err.response?.data?.message || err.response?.data?.error || "Profile update failed: Network error or unexpected issue.";
      setError(msg);
      toast.error(msg);
      console.error("Profile update caught an error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        className="border border-[#ebedf3] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black"
        onSubmit={handleSubmit}
      >
        <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">User Information</h6>
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col items-center">
            <div className="relative mr-6">
              <ImageUploading
                value={profilePicturePreview ? [{ dataURL: profilePicturePreview }] : []} // Use profilePicturePreview for display
                onChange={onChange}
                maxNumber={maxNumber}
              >
                {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
                  <div className="upload__image-wrapper">
                    {profilePicturePreview ? ( // Check profilePicturePreview for display
                      <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200">
                        <img
                          src={profilePicturePreview} // Use profilePicturePreview here
                          alt="Profile"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="ml-6 w-32 h-32 overflow-hidden rounded-full border border-gray-200 flex items-center justify-center">
                        <img
                          src="/assets/images/default-profile.png"
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    <button
                      type="button"
                      className="btn bg-yankees-blue text-white font-montserrat-light mt-3"
                      onClick={onImageUpload}
                      // Disable upload button if a picture is already displayed (either existing or newly selected)
                      disabled={!!profilePicturePreview} // This is the change!
                    >
                      Upload Profile Picture
                    </button>
                    {profilePicturePreview && ( // Show remove button if there's a picture
                        <button
                            type="button"
                            className="btn btn-outline-danger mt-2 ml-6"
                            onClick={() => {
                                setProfilePicturePreview(null);
                                setProfilePictureFile(null);
                            }}
                        >
                            Remove Picture
                        </button>
                    )}
                  </div>
                )}
              </ImageUploading>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Form fields */}
            {Object.keys(formData).map((key) => (
              <div className='text-yankees-blue font-montserrat-extralight' key={key}>
                <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
                {key === 'country' ? (
                  <select
                    id={key}
                    name={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="form-select text-yankees-blue font-montserrat-light"
                  >
                    <option value="">Select your Country</option>
                    {countries.map((country: ICountry) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                ) : key === 'city' ? (
                  <select
                    id={key}
                    name={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="form-select text-yankees-blue font-montserrat-light"
                    disabled={!formData.country}
                  >
                    <option value="">Select your City</option>
                    {citiesOfSelectedCountry.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={key}
                    name={key}
                    type={key === 'email' ? 'email' : 'text'}
                    value={formData[key as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="form-input text-yankees-blue font-montserrat-light"
                  />
                )}
              </div>
            ))}

            {/* Interests */}
            <div>
              <label className="block text-yankees-blue font-montserrat-extralight mb-2">Interests</label>
              <div className="flex flex-wrap gap-2">
                {interestsOptions.map((interest) => (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => handleInterestClick(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-montserrat-light ${
                      interests.includes(interest)
                        ? "bg-yankees-blue text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Form */}
            <div className="flex flex-col sm:col-span-2">
              <h6 className="text-lg font-montserrat-regular text-yankees-blue mb-5">Socials</h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* LinkedIn */}
                <div className="flex flex-col">
                  <label htmlFor="linkedin" className="text-sm text-yankees-blue font-montserrat-extralight">LinkedIn</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder=""
                    value={socials.linkedin || ''}
                    onChange={handleSocialsChange}
                    className="form-input"
                  />
                </div>

                {/* Behance */}
                <div className="flex flex-col">
                  <label htmlFor="behance" className="text-sm text-yankees-blue font-montserrat-extralight">Behance</label>
                  <input
                    type="text"
                    id="behance"
                    name="behance"
                    placeholder=""
                    value={socials.behance || ''}
                    onChange={handleSocialsChange}
                    className="form-input"
                  />
                </div>

                {/* Facebook */}
                <div className="flex flex-col">
                  <label htmlFor="facebook" className="text-sm text-yankees-blue font-montserrat-extralight">Facebook</label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder=""
                    value={socials.facebook || ''}
                    onChange={handleSocialsChange}
                    className="form-input"
                  />
                </div>

                {/* Instagram */}
                <div className="flex flex-col">
                  <label htmlFor="instagram" className="text-sm text-yankees-blue font-montserrat-extralight">Instagram</label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder=""
                    value={socials.instagram || ''}
                    onChange={handleSocialsChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2 mt-3 justify-items-center">
              {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
              {success && <p className="text-green-500 mb-2 text-center">{success}</p>}
              <button
                type="submit"
                className="btn bg-yankees-blue text-white font-montserrat-light w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;