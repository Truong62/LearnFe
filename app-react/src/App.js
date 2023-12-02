import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/youtube');
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="App">
      <h1>Thông tin Video từ API YouTube</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>{data.nameChannel}</p>
          <img src={data.logo} alt="Logo kênh" />
          <img src={data.thumnail} alt="Hình ảnh video" />
          { }
        </div>
      )}
    </div>
  );
}

export default App;
