import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const EmployeeProfile = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center mt-5">Welcome to Employee Profile Page</h1>
      <h2 className="text-center mt-5">{user.email || "No email available"}</h2>
    </>
  );
};

export default EmployeeProfile;
// import React, { useEffect, useState } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";

// const EmployeeProfile = () => {
//   const { user } = useAuthContext();
//   const [employees, setEmployees] = useState(null);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       if (user) {
//         try {
//           const response = await fetch("/api/employee", {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${user.token}`,
//             },
//           });
//           const json = await response.json();
//           setEmployees(json);
//         } catch (error) {
//           console.error("Error fetching employee:", error);
//         }
//       }
//     };

//     fetchEmployee();
//   }, [user]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="m-2 justify-content-center">
//       <span>{user.email || "No email available"}</span>
//       <table>
//         <tbody>
//           {employees &&
//             employees.map((employee) => (
//               <tr key={employee._id}>
//                 <td>{employee.name}</td>
//                 <td>{employee.email}</td>
//                 <td>$ {employee.salary}</td>
//                 <td>{employee.address}</td>
//                 <td>{employee.category}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeeProfile;
