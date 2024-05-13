import React from "react";
// import "./LoginSignout.css";

export const LoginSignout = () => {
  const handleGoogleCalendarLink = () => {
    window.open("https://calendar.google.com/", "_blank");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-primary p-10"
          onClick={handleGoogleCalendarLink}
        >
          Calendar Management
        </button>
      </div>
    </div>
  );
};

export default LoginSignout;

// import React from "react";

// export const LoginSignout = () => {
//   return (
//     <div className="container">
//       <div className="vh-20">
//         <div className="d-flex justify-content-center mt-3">
//           <iframe
//             src="https://calendar.google.com/calendar/embed?mode=WEEK&height=600&wkst=1&bgcolor=%23ffffff&src=en.usa%23holiday%40group.v.calendar.google.com&color=%23182C57&ctz=America%2FNew_York"
//             style={{ border: 0 }}
//             width="800"
//             height="600"
//             frameborder="0"
//             scrolling="no"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignout;
