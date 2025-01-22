import { useState } from "react";
import Card from '../components/ProductCard/Card';

const HomePage = () => {
  const [data, setData] = useState(
    new Array(20).fill({ title: 'Product Title' })
  );

  console.log(data); // Corrected to log the data

  return (
    <div className="bg-gray-900 text-white">
      <h1 className="text-center">Home Page for Follow Along</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((ele, index) => (
          <div key={index} style={{ margin: 'auto' }}>
            <Card title={ele.title} index={index} /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
