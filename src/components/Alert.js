import React from "react";

export default function Alert(props) {
  return (
    <>
    <div style={{height:'75px'}}>
    {props.alert && (
      <div>
        <div className="alert alert-primary " role="alert">
          <strong>{props.alert.type}</strong> {props.alert.msg}
        </div>
      </div>
    )}
    </div>
    </>
  );
}
