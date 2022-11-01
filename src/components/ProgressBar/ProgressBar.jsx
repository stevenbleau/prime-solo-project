import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '90%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: 'rgb(1, 182, 175)',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {/* <span style={labelStyles}>{`${completed}%`}</span> */}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;