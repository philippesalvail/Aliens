import React from "react";
import styled from "styled-components";
import {IconPlus, IconMinus} from "./Icons";
import GradeRow from "./GradeRow";

function StudentCard({student}) {
  const [showList, setShowList] = React.useState(false);
  const [tagInput, setTagInput] = React.useState("");

  return (
    <>
      {
        <div className="character" key={student.id}>
          <div className="characterCard">
            <div className="characterAvatar">
              <img
                src={student.pic}
                alt={student.firstName}
                className="characterImg"
              />
            </div>
            <div className="characterDesc">
              <div className="characterNameBanner">
                <div className="characterName">
                  {student.firstName} {student.lastName}
                </div>
                <button
                  className="characterBtn"
                  onClick={() => {
                    setShowList((n) => !n);
                  }}
                >
                  {showList ? <IconMinus /> : <IconPlus />}
                </button>
              </div>
              <div>Email: {student.email}</div>
              <div>Company: {student.company}</div>
              <div>Skill: {student.skill}</div>
              <div>
                Average:
                {student.grades.reduce(
                  (a, b) => parseFloat(a) + parseFloat(b),
                  0
                ) / student.grades.length}
              </div>

              {showList &&
                student.grades.map((grade, index) => {
                  return (
                    <GradeRow key={index + grade} grade={grade} index={index} />
                  );
                })}

              <div className="characterTags">
                <div>
                  <div className="characterTagRow">
                    {student.tags &&
                      student.tags.map((tag, index) => {
                        return (
                          <span className="characterTag" key={index}>
                            {tag}
                          </span>
                        );
                      })}
                  </div>
                </div>
                <div className="characterInputWrapper">
                  <input
                    className="characterTagInput"
                    placeholder="Add a tag"
                    onChange={(ev) => {
                      setTagInput(ev.target.value);
                    }}
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter") {
                        ev.preventDefault();
                        student.tags = [...student.tags, tagInput];
                        setTagInput("");
                      }
                    }}
                    value={tagInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default StudentCard;
