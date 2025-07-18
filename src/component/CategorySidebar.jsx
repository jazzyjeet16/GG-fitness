// import React from 'react';
// import '../css/CategorySidebar.css'
// export default function CategorySidebar() {
//   const categories = [
//     "Strength",
//     "Cardio",
//     "Flexibility",
//     "HIIT",
//     "Weight Loss",
//     "Endurance"
//   ];

//   return (
//     <aside className="category-sidebar">
//       <h3>Categories</h3>
//       <ul>
//         {categories.map((cat, idx) => (
//           <li key={idx}>{cat}</li>
//         ))}
//       </ul>
//     </aside>
//   );
// }
import React, { useState } from 'react';
import '../css/CategorySidebar.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function CategorySidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const categories = [
    "Strength",
    "Cardio",
    "Flexibility",
    "HIIT",
    "Weight Loss",
    "Endurance"
  ];

  return (
    <aside className="category-sidebar">
      <div className="sidebar-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Categories</h3>
        {isOpen ? <FiChevronUp className="dropdown-icon" /> : <FiChevronDown className="dropdown-icon" />}
      </div>

      {isOpen && (
        <ul>
          {categories.map((cat, idx) => (
            <li key={idx}>{cat}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}
