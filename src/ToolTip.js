import React from 'react';
import './ToolTip.css';

const width = 600;
const height = 200;
const offsetY = 30;
const offsetX = 30;
const widthPinter = 7.5;

export default ({show, x = 0, y = 0, rightEdge = 0}) => {
  const overflowLeft = x - width / 2 <= 0;
  const overflowRight = x + width / 2 >= rightEdge;
  let left = x - width / 2;
  let leftPointer = width / 2 - widthPinter;
  if (overflowLeft) {
    left = x - offsetX;
    leftPointer = offsetX - widthPinter;
  }
  if (overflowRight) {
    left = x - width + offsetX;
    leftPointer = width - offsetX - widthPinter;
  }
  return (
    <div
      className="tooltip"
      style={{
        display: show ? 'block' : 'none',
        width,
        height,
        top: y - height - offsetY,
        left
      }}
    >
      <div className="tooltip__title"/>
      <div
        className="tooltip__pointer"
        style={{left: leftPointer}}
      />
    </div>
  );
}