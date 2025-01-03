import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const AddEmployee = () => {
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [assetone, setAssetone] = useState("");
  const [assettwo, setAssettwo] = useState("");
  const [assetthree, setAssetthree] = useState("");
  const [assetfour, setAssetfour] = useState("");
  const [trainone, setTrainone] = useState("");
  const [traintwo, setTraintwo] = useState("");
  const [trainthree, setTrainthree] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validatePassword = (password) => {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return re.test(password);
    };

    const employee = {
      name,
      email,
      password,
      salary,
      address,
      category,
      image,
      assetone,
      assettwo,
      assetthree,
      assetfour,
      trainone,
      traintwo,
      trainthree,
    };

    // Validate password only if it has been changed
    if (employee.password) {
      if (!validatePassword(employee.password)) {
        setError(
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
        return;
      }
    }

    const response = await fetch("/api/employee", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();
    if (response.ok) {
      setName("");
      setEmail("");
      setPassword("");
      setSalary("");
      setAddress("");
      setCategory("");
      setImage("");
      setAssetone("");
      setAssettwo("");
      setAssetthree("");
      setAssetfour("");
      setTrainone("");
      setTraintwo("");
      setTrainthree("");

      setError(null);
      console.log("new employee added", json);
    } else {
      setError(json.error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      if (user) {
        try {
          const response = await fetch("/api/category", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          const json = await response.json();
          setCategories(json);
        } catch (error) {
          console.error("Error fetching category:", error);
          setError(error.message);
        }
      }
    };

    fetchCategories();
  }, [user]);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form onSubmit={handleSubmit} className="row g-1">
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              onChange={(e) => setSalary(e.target.value)}
              autoComplete="off"
              name="salary"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="off"
              name="address"
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category_id"
              id="category"
              className="form-select"
              value={category} // Add this line to control the select element with the category state
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>{" "}
              {/* Add this line to set the initial value to null */}
              {categories &&
                categories.map((category) => {
                  return (
                    <option key={category._id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div>
          {/* <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImage(reader.result);
                };
                reader.readAsDataURL(file);
              }}
            />
          </div> */}

          {/* <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Asset One
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setAssetone(e.target.value)}
              autoComplete="off"
              name="assetone"
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Asset Two
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setAssettwo(e.target.value)}
              autoComplete="off"
              name="assettwo"
            />
          </div>

          {/* for asset three */}
          {/* <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Asset Three
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setAssetthree(e.target.value)}
              autoComplete="off"
              name="assetthree"
            />
          </div>

         

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Asset Four
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setAssetfour(e.target.value)}
              autoComplete="off"
              name="assetfour"
            />
          </div> 

          {/* for train one */}

          {/* <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Train One
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setTrainone(e.target.value)}
              autoComplete="off"
              name="trainone"
            />
          </div>

          {/* for train two */}

          {/* <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Train Two
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setTraintwo(e.target.value)}
              autoComplete="off"
              name="traintwo"
            />
          </div> 

       

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Train Three
            </label>

            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              onChange={(e) => setTrainthree(e.target.value)}
              autoComplete="off"
              name="trainthree"
            />
          </div> */}

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
};

export default AddEmployee;
