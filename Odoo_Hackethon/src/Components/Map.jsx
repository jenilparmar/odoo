import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const Map = () => {
  const [crimeArray, setCrimeArray] = useState([]); // State to hold fetched crime data

  useEffect(() => {
    // Fetch crime report data from backend
    axios({
      url: 'http://localhost:8000/GetCrimeReport',
      method: 'GET',
    })
      .then((res) => {
        setCrimeArray(res.data); // Store fetched data in state
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []); // Fetch data only once on component mount

  const center = [21.674161, 71.212202]; // Initial map center coordinates
  const zoom = 10; 

  return (
    <>
      <h1 className='text-green-600 text-5xl self-center relative -top-12 font-semibold'>Crime Report In Region</h1>
      <div className='flex flex-row justify-center gap-4'>
        <div className="w-5/12 h-96 border-2 border-black p-4  overflow-y-scroll">
          {crimeArray.length > 0 ? (
            crimeArray.map((crime, index) => (
              <div className='flex flex-row justify-between' style={{
                borderBottom:"0.2vh solid #2d2a2a"
              }}>
              <div key={index} className='p-2 border-b border-gray-300 text-xl '>
                <h3 className='font-bold '>Crime type:-{crime.crimeType}</h3>
                <p>Date Found: {new Date(crime.dateFound).toLocaleString()}</p>
                {crime.description?<p>Description: {crime.description}</p>:undefined}
                <p className={`${crime.severityLevel=="low"?'text-blue-600':undefined} ${crime.severityLevel=="medium"?'text-orange-500':undefined} ${crime.severityLevel=="high"?'text-red-500':undefined}`}>Severity: {crime.severityLevel}</p>
                <p>Contact Name: {crime.contactName}</p>
                <p>Contact Number: {crime.contactNumber}</p>
                <p>Additional Info: {crime.additionalInfo}</p>
              </div>
             <div className='self-center flex flow-row gap-2'>
             <button className='self-center bg-red-500 p-2 rounded-lg active:bg-red-700'>Remove</button>
              <button className='self-center bg-red-500 p-2 rounded-lg active:bg-red-700' onClick={()=>{
                window.open(`https://www.google.com/maps?q=${crime.latitude},${crime.longitude}`)
              }}>Get Location</button>
             </div>
              </div>
            ))
          ) : (
            <p>No crime reports available.</p>
          )}
        </div>
        <MapContainer center={center} className='self-center border-2 border-black' zoom={zoom} style={{ 
          height: '384px',
          width:"500px" }}>
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
                {/* Add more details as needed */}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
