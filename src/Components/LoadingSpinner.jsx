import React from "react";
import { FadeLoader } from "react-spinners";


const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <FadeLoader color="#36d7b7" size={20} loading={true}></FadeLoader>
      </div>
    </div>
  );
};

export default LoadingSpinner;
