import React from "react";
import { useParams } from "react-router-dom";
import { Courses as CourseList } from "../../../component/CourseCard_1";
import FixedScheduleCard from "../../../component/FixedSchedule";
import "./FixedSchedule.css"; // Optional for styling

const FixedSlot = () => {
  const { name } = useParams();
  const courseName = name.replace(/-/g, " ");
  const courseObj = CourseList.find(
    (c) => c.name.toLowerCase() === courseName.toLowerCase()
  );

  const sessionsData = [
    {
      sessionName: "Session 1",
      date: "26/06/2024",
      time: "9:00PM",
      meetingLink: "https://zoom.us/session1",
    },
    {
      sessionName: "Session 2",
      date: "27/06/2024",
      time: "9:00PM",
      meetingLink: "https://zoom.us/session2",
    },
    {
      sessionName: "Session 3",
      date: "28/06/2024",
      time: "9:00PM",
      meetingLink: "https://zoom.us/session3",
    },
    {
      sessionName: "Session 4",
      date: "29/06/2024",
      time: "9:00PM",
      meetingLink: "https://zoom.us/session4",
    },
  ];

  return (
    <div className="viewslots-container">
      <h2 className="viewslots-title">
        {courseObj ? courseObj.name : "Course Not Found"}
        <span className="viewslots-badge">
          {courseObj ? courseObj.time : ""}
        </span>
      </h2>

      <FixedScheduleCard sessions={sessionsData} />
    </div>
  );
};

export default FixedSlot;
