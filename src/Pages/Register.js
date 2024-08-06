import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../index";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    let a = 0;
  
    if (firstname.length < 3) {
      a = 1;
      toast.error("First name must contain at least 3 letters");
    }
    if (lastname.length < 3) {
      a = 1;
      toast.error("Last name must contain at least 3 letters");
    }
    if (phone.length !== 10) {
      a = 1;
      toast.error("Phone number must contain 10 digits");
    }
    if (nic.length !== 10) {
      a = 1;
      toast.error("NIC must contain 10 digits");
    }
    if (password.length < 8) {
      a = 1;
      toast.error("Password must contain at least 8 characters");
    }
  
    if (a === 0) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/v1/user/patient/register`,
          { firstname, lastname, email, phone, nic, dob, gender, password, role: "patient" },
          {
            withCredentials: true,
          }
        );
  
        toast.success("Success");
        setIsAuthenticated(true);
        navigateTo("/");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setNic("");
        setDob("");
        setGender("");
        setPassword("");
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          console.error("An error occurred:", error);
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };
  

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <p>Please Sign Up To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleRegistration}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};


