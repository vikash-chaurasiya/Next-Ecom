import React from "react";

const CardLoading = () => {
  return (
    <>
      <>
        <main>
            <div className="flex flex-col  rounded-sm shadow-md animate-pulse">
              <div className="h-48 rounded-t dark:bg-gray-700"></div>
              <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-full h-6 rounded dark:bg-gray-700"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
              </div>
            </div>
        </main>
      </>
    </>
  );
};

export default CardLoading;
