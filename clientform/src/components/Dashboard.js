import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Legend } from "recharts";

function Dashboard() {

  const responseArr = [
    { name: "Google", percentage: 55, url: "https://www.google.com" },
    { name: "Facebook", percentage: 40, url: "https://www.facebook.com" },
    { name: "Amazon", percentage: 25, url: "https://www.amazon.com" },
    { name: "Microsoft", percentage: 30, url: "https://www.microsoft.com" }
  ];

const handleClick = (url) => {
  window.location = url;
}
  return (
    <div className='container d-flex justify-content-center mt-5'>
    <BarChart width={600} height={300} data={responseArr} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name"/>
      <YAxis />
      <Tooltip />
      <Legend
        />
      <Bar dataKey="percentage" fill="#8884d8"  onClick={(event) => handleClick(event.payload.url)}  />
    </BarChart>
    </div>
  )
}

export default Dashboard