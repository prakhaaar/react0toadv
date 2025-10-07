import React from "react";

/**
 * ProgressBar Component
 *
 * Props:
 * - progress (number): The current progress value (0-100).
 * - height (string): The height of the progress bar (default: '20px').
 * - backgroundColor (string): The background color of the progress bar (default: '#e0e0de').
 * - progressColor (string): The color of the progress indicator (default: '#76c7c0').
 */
const ProgressBar = ({
  progress,
  height = "20px",
  backgroundColor = "#e0e0de",
  progressColor = "#76c7c0",
}) => {
  const containerStyle = {
    height,
    width: "100%",
    backgroundColor,
    borderRadius: "50px",
    overflow: "hidden",
    margin: "8px 0",
  };

  const fillerStyle = {
    height: "100%",
    width: `${Math.min(Math.max(progress, 0), 100)}%`,
    backgroundColor: progressColor,
    transition: "width 0.5s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyle = {
    padding: "0 8px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: height,
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyle}>{`${Math.min(
          Math.max(progress, 0),
          100
        )}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
