import React, { useState } from "react";
import CourseCard, { Courses } from "../../../component/CourseCard_1";

import "./Courses.css";

const statusOptions = ["All", "In Progress", "Completed"];

function Course() {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredCourses =
    selectedStatus === "All"
      ? Courses
      : Courses.filter(
          (course) =>
            course.status?.toLowerCase().trim() ===
            selectedStatus.toLowerCase().trim()
        );

  return (
    <div className="course-container">
      <h2 className="course-title">Courses</h2>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {statusOptions.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`filter-button ${
              selectedStatus === status ? "active" : "inactive"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Render Filtered Courses */}
      {filteredCourses.length ? (
        <CourseCard courseData={filteredCourses} />
      ) : (
        <p className="no-courses">No courses found.</p>
      )}
    </div>
  );
}

export default Course;

