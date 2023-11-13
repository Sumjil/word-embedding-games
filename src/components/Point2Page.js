import React, { useState } from 'react';
import './Point2Page.css';

const Point2Page = () => {
  const points = [
    { id: 1, label: 'Point 1', x: 50, y: 50 },
    { id: 2, label: 'Point 2', x: 150, y: 100 },
    { id: 3, label: 'Point 3', x: 250, y: 150 },
    // Add more points as needed
  ];

  const getRandomPoint = () => {
    return points[Math.floor(Math.random() * points.length)];
  };

  const [targetPoint] = useState(getRandomPoint());
  const [clickedPoint, setClickedPoint] = useState(null);

  const handlePointClick = (point) => {
    setClickedPoint(point);
  };

  const calculateDistance = (point1, point2) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return (
    <div className="point-container">
      {points.map((point) => (
        <div
          key={point.id}
          className="point"
          style={{ left: point.x, top: point.y }}
          onMouseEnter={() => console.log(point.label)} // Just for testing, you can replace it with your logic
          onClick={() => handlePointClick(point)}
        ></div>
      ))}
      {clickedPoint && (
        <>
          <svg className="line-container">
            <line
              x1={targetPoint.x}
              y1={targetPoint.y}
              x2={clickedPoint.x}
              y2={clickedPoint.y}
              style={{ stroke: 'black', strokeWidth: 2 }}
            />
          </svg>
          <p>
            Distance to the target point: {calculateDistance(clickedPoint, targetPoint).toFixed(2)} units.
            {calculateDistance(clickedPoint, targetPoint) === 0 ? ' You guessed it!' : ''}
          </p>
        </>
      )}
    </div>
  );
};

export default Point2Page;
