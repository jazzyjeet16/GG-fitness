import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css"; // External CSS

// Export flat course array
export const Courses = [
  {
    name: "Course 1",
    content: "Resource only",
    status: "Completed",
    time: null,
    image: "/course.png",
  },
  {
    name: "Course 2",
    content: "Live session",
    status: "",
    time: "fixed",
    image: "/course.png",
  },
  {
    name: "Course 3",
    content: "Live session",
    status: "Completed",
    time: "fixed",
    image: "/course.png",
  },
  {
    name: "Course 4",
    content: "Live session",
    status: "In Progress",
    time: "fixed",
    image: "/course.png",
  },
  {
    name: "Course 5",
    content: "Live session",
    status: "In Progress",
    time: "flexible",
    image: "/course.png",
  },
];

const CourseCard = ({ courseData }) => {
  const navigate = useNavigate();

  const getContentColor = (content) =>
    content?.toLowerCase() === "resource only"
      ? "content-resource"
      : "content-live";

  const getTimeColor = (time) =>
    time?.toLowerCase() === "fixed" ? "time-fixed" : "time-flexible";

  const getStatusStyle = (status) => {
    if (!status) return {};
    return status.toLowerCase() === "completed"
      ? { backgroundColor: "#4CAF50", color: "white" }
      : {};
  };

  return (
    <div className="course-card-container">
      {courseData.map((item, index) => (
        <div key={index} className="course-item">
          <div className="course-left">
            <img
              src={item.image}
              alt={item.name}
              className="course-image"
            />
            <div>
              <div className="course-tags">
                <h3 className="course-name">{item.name}</h3>
                {item.content && (
                  <span className={`course-tag ${getContentColor(item.content)}`}>
                    {item.content === "Live session" ? "Live Sessions" : "Resource Only"}
                  </span>
                )}
                {item.time && (
                  <span className={`course-tag ${getTimeColor(item.time)}`}>
                    {item.time.charAt(0).toUpperCase() + item.time.slice(1)}
                  </span>
                )}
                {item.status && (
                  <span
                    className={`course-tag ${
                      item.status.toLowerCase() !== "completed" ? "status-inprogress" : ""
                    }`}
                    style={getStatusStyle(item.status)}
                  >
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right-side Button */}
          {item.content.toLowerCase() === "resource only" ? (
            <button className="course-button">
              Download
              <img
                src="/downloads.png"
                alt="download"
                className="button-icon"
              />
            </button>
          ) : (
            <button
              className="course-button"
              onClick={() => {
                const slug = item.name.replace(/\s+/g, "-").toLowerCase();
                const path =
                  item.time?.toLowerCase() === "fixed"
                    ? `/MyAccount/courses/fixed/${slug}`
                    : `/MyAccount/courses/${slug}`;
                navigate(path);
              }}
            >
              View Slots
              <img
                src="/export.png"
                alt="view"
                className="button-icon"
              />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
