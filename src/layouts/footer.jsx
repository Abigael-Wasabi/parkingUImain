import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="nb footer">
      <p>&copy; {currentYear} SwiftPark. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;