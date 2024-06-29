import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
const Map = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(()=>{
    gsap.to(".Name2",{
      width:'35vw',
      duration:1
    })
    gsap.timeline().fromTo(".map",{
      y:50,
      opacity:0
    },{
      boxShadow:'0px 0px 15px black',
      duration:1,
      y:0,
      opacity:1

    })
    gsap.timeline().fromTo(".crime",{
      y:50,
      opacity:0
    },{
      boxShadow:'0px 0px 15px black',
      duration:1,
      y:0,
      opacity:1

    })

  })



  const [crimeArray, setCrimeArray] = useState([]); 

  useEffect(() => {
  
    axios({
      url: "http://localhost:8000/GetCrimeReport",
      method: "GET",
    })
      .then((res) => {
        setCrimeArray(res.data); 
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); 

  const center = [21.674161, 71.212202]; 
  const zoom = 13;

  const downloadImage = (base64Image, index) => {
    const link = document.createElement("a");
    link.href = base64Image;
    link.download = `image_${index}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <h1 className="text-green-600 text-5xl self-center relative -top-12 font-bold">
        Crime Report In Region
      </h1>
      <div className="Name2 w-0 h-1 relative -top-8 rounded-lg bg-black self-center"></div>

      <div className="flex flex-row justify-center gap-4">
        <div className="crime w-5/12 h-96 border-2 border-black p-4 overflow-y-scroll">
          {crimeArray.length > 0 ? (
            crimeArray.map((crime, index) => (
              <div
                className="flex flex-row justify-between"
                style={{ borderBottom: "0.2vh solid #2d2a2a" }}
                key={index}>
                <div className="p-2 border-b border-gray-300 text-xl">
                  <h3 className="font-bold">Crime type: {crime.crimeType}</h3>
                  <p>
                    Date Found: {new Date(crime.dateFound).toLocaleString()}
                  </p>
                  {crime.description && <p>Description: {crime.description}</p>}
                  <p
                    className={`${
                      crime.severityLevel === "low"
                        ? "text-blue-600"
                        : undefined
                    } ${
                      crime.severityLevel === "medium"
                        ? "text-orange-500"
                        : undefined
                    } ${
                      crime.severityLevel === "high"
                        ? "text-red-500"
                        : undefined
                    }`}>
                    Severity: {crime.severityLevel}
                  </p>
                  <p>Contact Name: {crime.contactName}</p>
                  <p>Contact Number: {crime.contactNumber}</p>
                  <p>Additional Info: {crime.additionalInfo}</p>
                </div>
                <div className="self-center flex flex-col">
                  <button className="self-center bg-red-500 p-2 rounded-lg active:bg-red-700">
                    Remove
                  </button>
                  <br />
                  <button
                    className="self-center bg-red-500 p-2 rounded-lg active:bg-red-700"
                    onClick={() => {
                      window.open(
                        `https://www.google.com/maps?q=${crime.latitude},${crime.longitude}`
                      );
                    }}>
                    Get Location
                  </button>
                  <br />
                  {crime.files &&
                    crime.files.map((file, fileIndex) => (
                      <button
                        key={fileIndex}
                        className="self-center bg-red-500 p-2 rounded-lg active:bg-red-700"
                        onClick={() => downloadImage(file, fileIndex)}>
                        Download <br />
                        Image
                      </button>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p>No crime reports available.</p>
          )}
        </div>
        <MapContainer
          center={center}
          className="map self-center border-2 border-black"
          zoom={zoom}
          style={{ height: "400px", width: "500px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {crimeArray.map((crime, index) => (
            <Marker key={index} position={[crime.latitude, crime.longitude]}>
              <Popup>
                <h3>{crime.crimeType}</h3>
                <p>Date Found: {new Date(crime.dateFound).toLocaleString()}</p>
                <p>Description: {crime.description}</p>
                <p>Severity: {crime.severityLevel}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
