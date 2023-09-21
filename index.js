import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
// import "eact-toastify/dist/react-toastify";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
<ToastContainer>
    <App />

</ToastContainer>

{/* <FcLike></FcLike> */}
 </div>
);
