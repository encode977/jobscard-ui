import React from "react";
import design from "../img/design.png";

import { jobs } from "../handlers/jobData";

function Jobs() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h2 className="text-title font-bold">Open positions</h2>
        <div className="grid gap-5 grid-cols-3">
          {jobs.map((job) => (
            <div className="rounded-xl bg-white  p-7 flex flex-col items-center space-y-5  shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-design shadow-sm">
                  <img className="h-7" src={job.icon} alt="" />
                </div>
                <h3 className="font-medium text-xl">{job.title}</h3>
              </div>
              <div className="font-medium text-base border-2 border-gray rounded-md p-2 px-8">
                {job.no} open positions
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <p className="text-sm font-medium text-center">
            We are proud to be an equal opportunity employer that values
            diversity. We do not discriminate on the basis of race, religion,
            color, national origin, gender, sexual orientation, age, marital
            status, veteran status, or disability status.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
