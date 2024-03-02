import React from "react";

const Company = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto py-8 px-6">
      <div className="shadow-company flex items-center justify-center flex-col py-8">
        <p className="text-[20px] text-textColor font-[500] mb-5">
          Trusted By 400+ Companies Around The World
        </p>
        <div className="flex items-center gap-16">
          <img src="/Company/Google.png" alt="company" className="w-[100px]" />
          <img src="/Company/Hexa.png" alt="company" className="w-[100px]" />
          <img src="/Company/Ideaa.png" alt="company" className="w-[100px]" />
          <img src="/Company/Meta.png" alt="company" className="w-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default Company;
