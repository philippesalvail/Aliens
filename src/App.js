import React from "react";

import StudentCard from "./Components/StudentCard";
import Loading from "./Components/Loader";
import "./css/styles.css";

function App() {
  const [students, setStudents] = React.useState(null);
  const [tag, setTag] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.students.length; i++) {
          data.students[i]["tags"] = [];
        }
        setStudents(data.students);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {students ? (
        <div className="page">
          <div className="searchContainer">
            <input
              className="searchField"
              placeholder="Search by name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              className="searchField"
              placeholder="Search by Tag..."
              onChange={(e) => {
                setTag(e.target.value);
              }}
              value={tag}
            />
          </div>
          {students
            .filter(
              (student) =>
                student.tags.toString().toLowerCase().includes(tag) &&
                (student.firstName + " " + student.lastName)
                  .toLowerCase()
                  .includes(name)
            )
            .map((student, index) => {
              return <StudentCard student={student} key={index} />;
            })}
          ;
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default App;
