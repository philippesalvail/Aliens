import React from "react";
import styled from "styled-components";
import "../css/styles.css";

function GradeRow({grade, index}) {
  return (
    <Row key={index} row={index}>
      <div>Test: {index + 1}</div>
      <div className="grade">Grade: {grade}</div>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  background-color: white;
  margin-top: ${(props) => (props.row === 0 ? "2%" : 0)};
`;

export default GradeRow;
