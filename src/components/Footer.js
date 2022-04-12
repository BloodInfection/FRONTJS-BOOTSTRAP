import React from "react";


var style = {
    backgroundColor: "rgb(153,102,203)",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "7px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
    color: "rgba(255, 255, 255, 0.445)",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
    return (
        <div>
          
            <div style={style}>
            2021-2022 © Wearel. Все права защищены. 
            </div>
        </div>
    )
}

export default Footer
