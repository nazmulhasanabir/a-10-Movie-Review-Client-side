import React from "react";

const NotWork = () => {
  return (
    <div>
      <div>
        <main className="h-screen  w-5/6 lg:w-5/12 mx-auto ">
          <p className=" text-2xl lg:text-5xl text-center ">404!</p>
          <h2 className="text-2xl lg:text-5xl text-center font-bold my-10">
            We lost this page
          </h2>
          <p className="text-center text-2xl font-semibold ">
            We searched high and low but couldn’t find what you’re looking for.
            Let’s find a better place for you to go,{" "}
            <Link className="text-blue-600 underline" to={"/"}>
              Home
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
};

export default NotWork;
