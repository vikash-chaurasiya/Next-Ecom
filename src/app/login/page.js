import LoginModal from "@/components/LoginModal";
import React from "react";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <LoginModal />
      </div>
    </>
  );
};

export default page;
