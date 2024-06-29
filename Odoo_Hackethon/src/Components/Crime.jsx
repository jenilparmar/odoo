import React, { useState } from "react";

export default function Crime() {
  const [formData, setFormData] = useState({
    crimeType: "",
    dateFound: "",
    description: "",
    severityLevel: "",
    contactName: "",
    contactNumber: "",
    additionalInfo: "",
    files: null,
    latitude: null,
    longitude: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: e.target.files,
    });
  };

  const fetchGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
          // Handle errors if needed
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle lack of geolocation support
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      crimeType: "",
      dateFound: "",
      description: "",
      severityLevel: "",
      contactName: "",
      contactNumber: "",
      additionalInfo: "",
      files: null,
      latitude: null,
      longitude: null,
    })
    // You can add your submission logic here
  };

  return (
    <div className="form self-center  w-10/12 flex flex-col shadow-lg justify-start overflow-x-hidden p-4">
      <h1 className="text-5xl p-3 font-bold text-green-600 self-center my-8">
        Crime Report
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-around mb-4">
          <div className="flex flex-row h-fit relative left-28 px-2 gap-5 items-center">
            <label
              htmlFor="crime-type"
              className="self-center mx-2 font-medium text-xl"
            >
              Type of Crime:
            </label>
            <select
              id="crime-type"
              name="crimeType"
              value={formData.crimeType}
              onChange={handleInputChange}
              className="mt-1 w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
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
          <div className="flex flex-row items-center left-12 -mx-2 w-full md:w-5/12">
            <label
              htmlFor="dateFound"
              className="block mb-2 self-center text-nowrap mx-2 text-xl font-medium"
            >
              Date & Time Found:
            </label>
            <input
              type="datetime-local"
              id="dateFound"
              name="dateFound"
              value={formData.dateFound}
              onChange={handleInputChange}
              className="mt-1 w-full h-10 py-2 px-3 bg-slate-300 border-2 border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <div className="self-center w-8/12 flex relative left-52 -mx-2 flex-row justify-start  gap-8 mb-4">
          <label
            htmlFor="description"
            className="block self-center text-left mx-2 text-xl font-medium"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            required
            className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex flow-row">
          <div className="self-center w-8/12 flex flex-row justify-center gap-4 -mx-2">
            <label
              htmlFor="severity-level"
              className="block self-center mx-2 text-xl font-medium"
            >
              Severity Level:
            </label>
            <select
              id="severity-level"
              name="severityLevel"
              value={formData.severityLevel}
              onChange={handleInputChange}
              className="mt-1 w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <button
            type="button" // Change type to button to prevent form submission
            onClick={fetchGeolocation}
            className="bg-green-600 p-2 active:bg-green-700 rounded-md font-semibold"
          >
           {formData.latitude && formData.longitude?'Fetched Location':"Give Location"}
          </button>
   
         
        </div>

        <h1 className="self-center text-5xl text-green-600 font-bold my-8 p-4 text-center">
          Your Information <br />
          (Optional)
        </h1>
        <div className="w-full h-16 gap-8 flex flow-row justify-center ">
          <div className="flex flex-row">
            <label
              htmlFor="contact-name"
              className="block text-xl text-nowrap mx-2 self-center font-medium"
            >
              Name (optional):
            </label>
            <input
              type="text"
              id="contact-name"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
              className="mt-1 block w-60 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex flex-row">
            <label
              htmlFor="contact-number"
              className="block text-xl text-center text-nowrap mx-2 self-center font-medium"
            >
              Mobile number <br /> (optional):
            </label>
            <input
              type="tel"
              id="contact-number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="mt-1 block w-60 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="self-center relative left-24 mx-3 w-10/12 flex flex-row justify-center">
          <label
            htmlFor="additional-info"
            className="block text-left mx-2 relative left-6 text-xl self-center font-medium"
          >
            Additional <br /> Information
          </label>
          <textarea
            id="additional-info"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows="3"
            className="mt-1 block w-9/12 relative left-16 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="self-center relative left-28 w-10/12 flex flex-row justify-center mt-4">
          <label
            htmlFor="media-upload"
            className="block relative left-10 text-xl text-center self-center font-medium"
          >
            Upload Photos:
          </label>
          <input
            type="file"
            id="media-upload"
            name="media"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-9/12 relative left-10 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
     <center>
     <button
          type="submit"
          className="bg-green-600 p-3 w-40 my-8  self-center rounded-xl text-xl font-medium"
        >
          Submit
        </button>
     </center>
        <div className="w-full h-32"></div>
      </form>
    </div>
  );
}
