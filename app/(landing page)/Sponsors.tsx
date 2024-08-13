import React from "react";

const Sponsors = () => {
  return (
    <div className="w-full bg-primary-900 p-4 text-white md:p-8">
      <h1 className="relative mb-6 hidden items-start text-2xl font-semibold md:mb-6 md:block">
        Partnered and Sponsored by the Best
      </h1>
      <h1 className="relative mb-6 items-start text-2xl font-semibold md:mb-6 md:hidden">
        Partners and Sponsors
      </h1>
      <div className="grid h-36 grid-cols-3 gap-4">
        <div className="flex items-center justify-center rounded-lg bg-slate-700 p-2 text-base hover:bg-white hover:text-black md:text-lg">
          Sponsor1
        </div>
        <div className="flex items-center justify-center rounded-lg bg-slate-700 p-2 text-base hover:bg-white hover:text-black md:text-lg">
          Sponsor2
        </div>
        <div className="flex items-center justify-center rounded-lg bg-slate-700 p-2 text-base hover:bg-white hover:text-black md:text-lg">
          Sponsor3
        </div>
        <div className="flex items-center justify-center rounded-lg bg-slate-700 p-2 text-base hover:bg-white hover:text-black md:text-lg">
          Sponsor4
        </div>
        <div className="flex items-center justify-center rounded-lg bg-slate-700 p-2 text-base hover:bg-white hover:text-black md:text-lg">
          Sponsor5
        </div>
        <div className="flex items-center justify-center rounded-lg bg-slate-700 p-2 text-base hover:bg-white hover:text-black md:text-lg">
          Sponsor6
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
