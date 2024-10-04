import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </span>
    );
  } else {
    return null;
  }
}