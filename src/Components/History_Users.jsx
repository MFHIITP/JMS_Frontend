import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../main';

const FetchAndDisplayData = (props) => {
  const [data, setData] = useState([]);
  const {adminemails} = useContext(MyContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nvdqwpdb-8000.inc1.devtunnels.ms/historyusers', {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        result.sort((a, b) => {
          if (a.logouttime === null && b.logouttime !== null) return -1;
          if (a.logouttime !== null && b.logouttime === null) return 1;
          return 0;
        });
        setData(result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if(!adminemails.includes(props.details.email)){
    return (
      <>
        <div className="text-white font-4xl">You are not an admin. Please leave immediately</div>
      </>
    )
  }

  return (
    <div className="container mx-auto p-4 text-white h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">User History ({data.length})</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">In Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">LogOut Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-sm text-gray-600">{item.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.email}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.logintime}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.logouttime}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchAndDisplayData;
