import React from 'react';
import ContentLoader from "react-content-loader"

const PizzaBackground = (props) => {
    return (
        <ContentLoader 
    speed={2}
    width={274}
    height={457}
    viewBox="0 0 274 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="122" cy="125" r="122" /> 
    <rect x="-1" y="266" rx="6" ry="6" width="258" height="29" /> 
    <rect x="-1" y="312" rx="17" ry="17" width="270" height="85" /> 
    <rect x="8" y="413" rx="0" ry="0" width="95" height="32" /> 
    <rect x="134" y="408" rx="20" ry="20" width="127" height="43" />
  </ContentLoader>
    )
}

export default PizzaBackground;
