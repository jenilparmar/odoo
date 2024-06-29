import React from "react";

export default function Crime() {
  return (
    <div className=" form self-center w-10/12 flex flex-col justify-start p-4">
       
       {/* ///////////////Crime Report///////////// */}
       
        <h1 className="text-5xl p-3 font-bold text-green-600 self-center my-8">Crime Report</h1>
      <div className="flex flex-row justify-around mb-4">
        <div className="flex flex-row h-fit relative left-28 px-2 gap-5 items-center">
          <label
            htmlFor="crime-type"
            className="self-center mx-2 font-medium text-gray-700 text-xl">
            Type of Crime:
          </label>
          <select
            id="crime-type"
            name="crime_type"
            className="mt-1 w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="theft">Theft</option>
            <option value="assault">Assault</option>
            <option value="vandalism">Vandalism</option>
            <option value="burglary">Burglary</option>
            <option value="fraud">Fraud</option>
            <option value="harassment">Harassment</option>
            <option value="drug-related">Drug-related</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-row items-center -mx-2 w-full md:w-5/12">
          <label
            htmlFor="dateFound"
            className="block mb-2 self-center text-nowrap mx-2 text-xl font-medium text-gray-700">
            Date & Time Found:
          </label>
          <input
            type="datetime-local"
            id="dateFound"
            name="dateFound"
            className="mt-1 w-full h-10 py-2 px-3 bg-slate-300 border-2 border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="self-center w-8/12 flex flex-row justify-start gap-8  mb-4">
        <label
          htmlFor="description"
          className="block self-center text-left mx-2 text-xl font-medium text-gray-700">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows="3"
          required
          className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>
      <div className="flex flow-row">
        <div className="self-center w-8/12 flex flex-row justify-center gap-4 -mx-2">
          <label
            htmlFor="severity-level"
            className="block self-center mx-2 text-xl font-medium text-gray-700">
            Severity Level:
          </label>
          <select
            id="severity-level"
            name="severity_level"
            className="mt-1 w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className="bg-green-600 p-2 rounded-md  font-semibold">
          Give Location
        </button>
      </div>
      {/* //////////////////// personal information/////////////// */}
      <h1 className="self-center text-5xl text-green-600 font-bold my-8 p-4 text-center">Your Information <br />
       (Optional)</h1>
       
    </div>
  );
}
