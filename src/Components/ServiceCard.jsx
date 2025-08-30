import React, { useRef, useState } from "react";

const ServiceCard = ({service, index}) => {
   
    const  [pos, setPos] = useState({x:0, y:0})
    const [visible, setVisible] = useState(false)

    const borderRef = useRef(null)

    const handleMouseMove = (e) => {
      const bound = borderRef.current.getBoundingClientRect();
      setPos({x : e.clientX - bound.left, y:e.clientY - bound.top})
    } 

  return (
    <div className="service-card-section" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} ref={borderRef} onMouseMove={handleMouseMove}>
      <div className={`service-card-container  ${visible ? 'opacity-70':'opacity-0'}`} style={{top:pos.y -150 , left:pos.x - 150 }}/>
        <div className="card-content">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                <img src={service.icon} alt="service-icon" className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" />
            </div>
            <div className="flex-1">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm mt-2">{service.description}</p>
            </div>
        </div>
      
    </div>
  );
};

export default ServiceCard;
