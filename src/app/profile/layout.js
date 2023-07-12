import React from "react";
import ProfileSidebar from "@/components/ProfileSidebar";

const Layout = ({children}) => {
  return (
    <>
      <main className="bg-slate-200">
        <section className="py-4 flex   w-11/12 m-auto text-slate-800">
         <ProfileSidebar/>
          <section className="bg-white ms-4 shadow-md rounded-sm w-full">
            {children}
          </section>
        </section>
      </main>
    </>
  );
};

export default Layout;
