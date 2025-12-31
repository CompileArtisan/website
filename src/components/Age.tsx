import React from "react";

const AgeCalculator = () => {
  const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const age = calculateAge(2005); 

  return (
    <>
          {age}
    </>
  );
};

export default AgeCalculator;
