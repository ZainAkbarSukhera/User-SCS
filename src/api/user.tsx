// // In your TypeScript Express backend (e.g., /routes/user.ts)
// import express from "express";
// // import cors from "cors";
// const cors = require("cors");
// const router = express.Router();

// const app = express();


// app.use(cors({ origin: "https://localhost:5173", credentials: true }));


// router.post("/sync-user", async (req, res) => {
//   const {   fullNameEnglish,
//       fullNameArabic,
//       username,
//       email,
//       mobileNumber,
//       password,
//       role,
//       country,
//       city,
//       interests,
//       profilePicture,
//       } = req.body;

//   try {
//     // Save or update user info in the dashboard DB
//     // Optional: Validate input
//     console.log("Received user from SCS:", req.body);

//     // Logic to store in DB (e.g., Prisma or Mongoose if you're using MongoDB here)
//     return res.status(201).json({
//     message: "User synced successfully",
//     user: {
//       fullNameEnglish,
//       fullNameArabic,
//       username,
//       email,
//       mobileNumber,
//       role,
//       country,
//       city,
//       interests,
//       profilePicture,
//     },
//   });
//   } catch (error) {
//     return res.status(500).json({ error: "Failed to sync user" });
//   }
// });

// export default router;
////////////////////////////////////////////////////////////////////////////////////////////
// import axios, { AxiosError, AxiosResponse } from "axios";

// // Define the expected data structure for login/signup payload
// export interface AuthPayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username: string;
//   email: string;
//   password: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string;
// }

// // Define a generic response structure
// interface ApiResponse<T> {
//   data?: T;
//   message?: string;
//   token?: string;
// }

// // Create axios instance
// const api = axios.create({
//   baseURL: "http://localhost:3001/v1/user",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Login function
// export const login = async (
//   data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<ApiResponse<any>> | { message: string }> => {
//   try {
//     const response = await api.post<ApiResponse<any>>("/login", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     return err.response?.data ?? { message: "Login failed. Server error." };
//   }
// };

// user.tsx

// import axios, { AxiosError, AxiosResponse } from "axios";

// // Define the expected data structure for login/signup payload
// export interface AuthPayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username: string;
//   email: string;
//   password: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string;
// }

// // Define the shape of the user data returned by the API within the 'user' key
// export interface SocialMediaLinks {
//   instagram?: string;
//   behance?: string;
//   // twitter?: string; // Don't forget Twitter!
//   linkedin?: string;
//   facebook?: string;
// }

// export interface ApiUserData {
//   attendedWorkshops?: string[];
//   city: string;
//   country: string;
//   createdAt?: string;
//   email: string;
//   favArtMarket?: string[];
//   favProjects?: string[];
//   following?: string[];
//   fullNameArabic: string;
//   fullNameEnglish: string;
//   interests: string[];
//   mobileNumber: string;
//   notificationsSettings?: { email: boolean; inApp: boolean };
//   password?: string;
//   profilePicture: string | null;
//   purchaseHistory?: string[];
//   role: string;
//   socialMediaLinks?: SocialMediaLinks; // Added socialMediaLinks
//   updatedAt?: string;
//   username: string;
//   wishlist?: string[];
//   __v?: number;
//   _id?: string;
// }

// // Define the specific success response data structure for login
// // This directly represents what your API returns in its JSON body
// export interface LoginSuccessData {
//   token: string;
//   user: ApiUserData;
//   message?: string; // Add if your API sends a 'message' at this top level as well
// }

// export interface AuthSuccessData { // Renamed from LoginSuccessData to be more general
//   token: string;
//   user: ApiUserData;
//   message?: string; // If your API sends a 'message' at this top level
// }

// export interface UpdatePayload {
//   fullNameEnglish?: string;
//   fullNameArabic?: string;
//   username?: string;
//   email?: string;
//   mobileNumber?: string;
//   country?: string;
//   city?: string;
//   interests?: string[];
//   role?: string;
//   profilePicture?: string; // If sending URL
//   socials?: { // Assuming you want to save these too
//     LinkedIn?: string;
//     Behance?: string;
//     Facebook?: string;
//     Instagram?: string;
//   };
//   // Add profilePictureFile for FormData approach
//   profilePictureFile?: File;
// }

// export interface UpdateSettingsPayload {
//   email?: string;
//   password?: string;
//   notificationsSettings?: {
//     email?: boolean;
//     inApp?: boolean;
//   };
//   // isPublic?: boolean; // If you add profile visibility to schema
// }

// // Create axios instance
// const api = axios.create({
//   baseURL: "http://localhost:3001/v1/user",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Login function
// export const login = async (
//   data: Pick<AuthPayload, "email" | "password">
// ): Promise<AxiosResponse<LoginSuccessData> | { message: string }> => {
//   try {
//     // Axios response.data will directly be of type LoginSuccessData
//     const response = await api.post<LoginSuccessData>("/login", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     // If the error response itself has a 'data' property with a 'message'
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Login failed. Server error." };
//   }
// };

// // Signup function
// // export const signup = async (
// //   data: AuthPayload
// // ): Promise<AxiosResponse<ApiResponse<any>> | { message: string }> => {
// //   try {
// //     const response = await api.post<ApiResponse<any>>("/create", data);
// //     return response;
// //   } catch (error) {
// //     const err = error as AxiosError<{ message: string }>;
// //     return err.response?.data ?? { message: "Signup failed. Server error." };
// //   }
// // };

// export const signup = async (
//   data: AuthPayload
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => { // Expect AuthSuccessData
//   try {
//     // Axios response.data will directly be of type AuthSuccessData
//     const response = await api.post<AuthSuccessData>("/create", data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     // If the error response itself has a 'data' property with a 'message'
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Signup failed. Server error." };
//   }
// };

// // Update User Profile function
// export const updateUserProfile = async (
//   userId: string,
//   data: FormData // Use FormData for file uploads
// ): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
//   try {
//     // Note: Axios automatically sets Content-Type to multipart/form-data for FormData
//     // You might need to adjust the baseURL if your update endpoint is different
//     const response = await api.patch<AuthSuccessData>(`/update/${userId}`, data);
//     return response;
//   } catch (error) {
//     const err = error as AxiosError<{ message: string }>;
//     // More robust error message extraction
//     return err.response?.data?.message ? { message: err.response.data.message } : { message: "Profile update failed. Server error." };
//   }
// };


// export const updateUserSettings = async (userId: string, data: UpdateSettingsPayload) => {
//   try {
//     const response = await api.patch(`/update/${userId}`, data);
//     console.log("Backend update settings response:", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("Error in updateUserSettings API call:", error);
//     throw error.response?.data || error.message;
//   }
// };


import axios, { AxiosError, AxiosResponse } from "axios";

// Define the expected data structure for login/signup payload
export interface AuthPayload {
  fullNameEnglish?: string;
  fullNameArabic?: string;
  username: string;
  email: string;
  password: string;
  mobileNumber?: string;
  country?: string;
  city?: string;
  interests?: string[];
  role?: string;
  profilePicture?: string;
}

// Define the shape of the user data returned by the API within the 'user' key
export interface SocialMediaLinks {
  instagram?: string;
  behance?: string;
  // twitter?: string; // Don't forget Twitter!
  linkedin?: string;
  facebook?: string;
}

export interface ApiUserData {
  attendedWorkshops?: string[];
  city: string;
  country: string;
  createdAt?: string;
  email: string;
  favArtMarket?: string[];
  favProjects?: string[];
  following?: string[];
  fullNameArabic: string;
  fullNameEnglish: string;
  interests: string[];
  mobileNumber: string;
  notificationsSettings?: { email: boolean; inApp: boolean };
  password?: string;
  profilePicture: string | null;
  purchaseHistory?: string[];
  role: string;
  socialMediaLinks?: SocialMediaLinks; // Added socialMediaLinks
  updatedAt?: string;
  username: string;
  wishlist?: string[];
  __v?: number;
  _id?: string;
}

// Define the specific success response data structure for login
// This directly represents what your API returns in its JSON body
export interface LoginSuccessData {
  token: string;
  user: ApiUserData;
  message?: string; // Add if your API sends a 'message' at this top level as well
}

export interface AuthSuccessData { // Renamed from LoginSuccessData to be more general
  token: string;
  user: ApiUserData;
  message?: string; // If your API sends a 'message' at this top level
}

export interface UpdatePayload {
  fullNameEnglish?: string;
  fullNameArabic?: string;
  username?: string;
  email?: string;
  mobileNumber?: string;
  country?: string;
  city?: string;
  interests?: string[];
  role?: string;
  profilePicture?: string; // If sending URL
  socials?: { // Assuming you want to save these too
    LinkedIn?: string;
    Behance?: string;
    Facebook?: string;
    Instagram?: string;
  };
  // Add profilePictureFile for FormData approach
  profilePictureFile?: File;
}

export interface UpdateSettingsPayload {
  email?: string;
  password?: string;
  notificationsSettings?: {
    email?: boolean;
    inApp?: boolean;
  };
  // isPublic?: boolean; // If you add profile visibility to schema
}

// Get the base URL from environment variables
// Use a fallback for safety, though it should always be defined in .env files
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/v1";


// Create axios instance
const api = axios.create({
  baseURL: `${API_BASE_URL}/user`, // Use the environment variable here
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// There was an unused Projectapi here in your original code.
// If it's intended to be used, ensure its baseURL also uses API_BASE_URL.
// For now, I'm assuming it might be a remnant or used elsewhere.
// If it's active in this file, uncomment and apply the baseURL change.
/*
const Projectapi = axios.create({
  baseURL: `${API_BASE_URL}/artConnectDirectory`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
*/

// Login function
export const login = async (
  data: Pick<AuthPayload, "email" | "password">
): Promise<AxiosResponse<LoginSuccessData> | { message: string }> => {
  try {
    // Axios response.data will directly be of type LoginSuccessData
    const response = await api.post<LoginSuccessData>("/login", data);
    return response;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    // If the error response itself has a 'data' property with a 'message'
    return err.response?.data?.message ? { message: err.response.data.message } : { message: "Login failed. Server error." };
  }
};

// Signup function
export const signup = async (
  data: AuthPayload
): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => { // Expect AuthSuccessData
  try {
    // Axios response.data will directly be of type AuthSuccessData
    const response = await api.post<AuthSuccessData>("/create", data);
    return response;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    // If the error response itself has a 'data' property with a 'message'
    return err.response?.data?.message ? { message: err.response.data.message } : { message: "Signup failed. Server error." };
  }
};

// Update User Profile function
export const updateUserProfile = async (
  userId: string,
  data: FormData // Use FormData for file uploads
): Promise<AxiosResponse<AuthSuccessData> | { message: string }> => {
  try {
    // Note: Axios automatically sets Content-Type to multipart/form-data for FormData
    const response = await api.patch<AuthSuccessData>(`/update/${userId}`, data);
    return response;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    // More robust error message extraction
    return err.response?.data?.message ? { message: err.response.data.message } : { message: "Profile update failed. Server error." };
  }
};


export const updateUserSettings = async (userId: string, data: UpdateSettingsPayload) => {
  try {
    const response = await api.patch(`/update/${userId}`, data);
    console.log("Backend update settings response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error in updateUserSettings API call:", error);
    throw error.response?.data || error.message;
  }
};

// The `addProjectToArtistApi` function was using `Projectapi` which was defined but commented out in your original code.
// If this function is still part of this file and intended to be used,
// ensure `Projectapi` is uncommented and its baseURL is also set dynamically.
// For now, I'm keeping it as it was (implicitly not working if Projectapi isn't defined).
// If `addProjectToArtistApi` should be in a different file (e.g., the one with `Projectapi` as a top-level instance), move it there.
/*
export const addProjectToArtistApi = async (
    artistId: string, // Assuming this artistId is used in the URL if adding to a specific artist's collection
    payload: ProjectPayload, // Renamed from projectData for consistency with signature
    token: string | null // token can be null, handle this at call site
): Promise<AxiosResponse<AddedProjectResponseData> | { message: string }> => {
    try {
        const response = await Projectapi.post<AddedProjectResponseData>(
            `/projects/${artistId}`, // Changed to POST for 'add' functionality. Re-verify your backend endpoint.
            payload, // Using 'payload' as per the function signature
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the authorization token
                },
            }
        );
        console.log("API call successful:", response); // Debug log for success
        return response;
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        console.error("Error in addProjectToArtistApi call:", err); // Debug log for error

        // Determine the error message from the response data, or provide a default
        const errorMessage = err.response?.data?.message
            ? err.response.data.message
            : "Failed to add project. An unexpected server error occurred.";

        return { message: errorMessage };
    }
};
*/