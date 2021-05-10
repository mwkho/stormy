import React from "react";
//import classnames from "classnames";
//import "components/Button.scss";

//cretes the buttons for the appointments component
export default function Button(props) {
   /*const buttonClass = classnames("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });*/

   return (
      <button
        //className={buttonClass}
        onClick={console.log('been cicked')}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }