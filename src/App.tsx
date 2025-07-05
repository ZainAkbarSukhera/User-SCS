import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState,  AppDispatch } from './store/store';
import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';
import {store} from './store/store';
import { setUserData } from './store/userSlice';
import {toast} from 'react-toastify';

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: RootState) => state.themeConfig);
    // const dispatch = useDispatch();

    const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     const handleMessage = (event: MessageEvent) => {
//       if (event.origin !== 'http://localhost:5173') { // Adjust to your main SCS website's origin (e.g., 'https://scs.com')
//         console.warn('Message from untrusted origin:', event.origin);
//         return;
//       }

//       if (event.data && event.data.type === 'USER_DATA_SYNC') {
//         const receivedUserData = event.data.payload;

//         // Basic type guard and check for required fields
//         if (typeof receivedUserData === 'object' && receivedUserData !== null &&
//             'username' in receivedUserData && 'email' in receivedUserData &&
//             'fullNameEnglish' in receivedUserData) {

//           dispatch(setUserData(receivedUserData));
//           toast.success("User data synchronized!");
//           console.log('User data received via postMessage:', receivedUserData);

//           // Optional: If you need to ensure this data is also saved/updated
//           // in the backend (MongoDB), make an API call here.
//           // This would be for persistence beyond the browser's local storage.
//           // Example:
//           // syncUserDataWithBackend(receivedUserData);

//         } else {
//           console.error('Invalid user data payload received:', receivedUserData);
//           toast.error('Failed to parse user data from main website.');
//         }
//       }
//     };

//     window.addEventListener('message', handleMessage);

//     return () => {
//       window.removeEventListener('message', handleMessage);
//     };
//   }, [dispatch]);

    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
        dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
    }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

    return (
        <div
            className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${
                themeConfig.rtlClass
            } main-section antialiased relative font-nunito text-sm font-normal`}
        >
            {children}
        </div>
    );
}

export default App;
