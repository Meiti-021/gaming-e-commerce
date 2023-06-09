import { useState } from "react";
import PageHero from "../components/PageHero";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const avatars = [
  "/assets/users/avatar1.png",
  "/assets/users/avatar2.png",
  "/assets/users/avatar3.png",
  "/assets/users/avatar4.png",
  "/assets/users/avatar5.png",
  "/assets/users/avatar6.png",
];
const Login = () => {
  const [value, setValue] = useState(0);
  const [passOpen, setPassOpen] = useState({ pass: false, copass: false });
  const [loginForm, setLogin] = useState({
    name: "",
    password: "",
    copassword: "",
    lastname: "",
    email: "",
    imageUrl: "/assets/users/avatar1.png",
  });

  const [signup, setsignup] = useState({
    password: "",
    email: "",
  });
  return (
    <div className="font-first-font ">
      <PageHero
        title="Sign-in/Sign-up"
        subtitle="Unlock Your Gaming Potential and Dive into the Action!"
        className="h-42 pb-5"
      />
      <div className="w-full  p-5 py-4 h-[46rem]">
        <div className="max-w-md w-full mx-auto">
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
          >
            <Tab label="sign-up" sx={{ fontFamily: "Outfit" }} />
            <Tab label="sign-in" sx={{ fontFamily: "Outfit" }} />
          </Tabs>
          {value === 0 ? (
            <div className="">
              <form
                className="w-full max-w-md h-auto gap-3 grid grid-cols-1 mt-10"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name :"
                  className="border-1 border-border-color text-sm p-4 search-bar h-12"
                  value={loginForm.name}
                  onChange={(e) => {
                    setLogin({ ...loginForm, name: e.target.value });
                  }}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name : "
                  className="border-1 border-border-color text-sm p-4 search-bar h-12"
                  value={loginForm.lastname}
                  onChange={(e) => {
                    setLogin({ ...loginForm, lastname: e.target.value });
                  }}
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email :"
                  className="border-1 border-border-color text-sm p-4 search-bar h-12"
                  value={loginForm.email}
                  onChange={(e) => {
                    setLogin({ ...loginForm, email: e.target.value });
                  }}
                />
                <div className="flex justify-between items-center relative">
                  <input
                    type={passOpen.pass ? "text" : "password"}
                    name=""
                    id=""
                    placeholder="Password :"
                    value={loginForm.password}
                    onChange={(e) => {
                      setLogin({
                        ...loginForm,
                        password: e.target.value,
                      });
                    }}
                    className="border-1 w-full border-border-color text-sm p-4 search-bar h-12"
                  />
                  <button
                    className="absolute right-4"
                    onClick={() => {
                      setPassOpen({
                        ...passOpen,
                        pass: !passOpen.pass,
                      });
                    }}
                  >
                    {passOpen.pass ? (
                      <VisibilityIcon style={{ color: "gray" }} />
                    ) : (
                      <VisibilityOffIcon style={{ color: "gray" }} />
                    )}{" "}
                  </button>
                </div>
                <div className="flex justify-between items-center relative">
                  <input
                    type={passOpen.copass ? "text" : "password"}
                    name=""
                    id=""
                    placeholder="Repeat Password"
                    value={loginForm.copassword}
                    onChange={(e) => {
                      setLogin({
                        ...loginForm,
                        copassword: e.target.value,
                      });
                    }}
                    className="border-1 w-full border-border-color text-sm p-4 search-bar h-12"
                  />
                  <button
                    className="absolute right-4"
                    onClick={() => {
                      setPassOpen({
                        ...passOpen,
                        copass: !passOpen.copass,
                      });
                    }}
                  >
                    {passOpen.copass ? (
                      <VisibilityIcon style={{ color: "gray" }} />
                    ) : (
                      <VisibilityOffIcon style={{ color: "gray" }} />
                    )}{" "}
                  </button>
                </div>
                <div className=" my-5 px-2 ">
                  <p className="text-sm mb-3">Choose an avatar:</p>
                  <div className="grid grid-cols-6 gap-3">
                    {avatars.map((avatar, index) => {
                      return (
                        <button
                          className={`w-16 p-1 rounded-md h-16 overflow-hidden ${
                            loginForm.imageUrl === avatar
                              ? "bg-yellow-300"
                              : undefined
                          }`}
                          key={avatar + index + "avatar"}
                          value={avatar}
                          onClick={() => {
                            setLogin({ ...loginForm, imageUrl: avatar });
                          }}
                        >
                          <img
                            src={avatar}
                            alt=""
                            className="w-full rounded-md  h-full object-cover object-center block"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-1 px-2">
                  <input type="checkbox" name="" id="policy" />
                  <label htmlFor="policy" className="text-xs">
                    By checking this box, I agree to the{" "}
                    <Link to="" className="underline text-blue">
                      Privacy Policy
                    </Link>
                    {"  "}
                    and
                    {"  "}
                    <Link to="" className="underline text-blue">
                      Terms of Service
                    </Link>
                    .
                  </label>
                </div>
                <div className="flex items-center gap-3 mb-1 px-2">
                  <input type="checkbox" name="" id="cookie" />
                  <label htmlFor="cookie" className="text-xs">
                    Remember Me!
                  </label>
                </div>
                <button className="w-full h-12 text-white search-bar bg-gradient-to-r from-blue  to-second-color">
                  Create Account
                </button>
              </form>
              <p className="mt-5 text-sm text-center">
                Already Have An Acoount?{" "}
                <span
                  onClick={() => {
                    setValue(1);
                  }}
                  className="underline text-blue hover:text-second-color cursor-pointer"
                >
                  {" "}
                  sign-in here.
                </span>
              </p>
            </div>
          ) : (
            <div>
              <form
                className="w-full max-w-md h-auto gap-3 grid grid-cols-1 mt-10"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email :"
                  className="border-1 border-border-color text-sm p-4 search-bar h-12"
                  value={signup.email}
                  onChange={(e) => {
                    setsignup({ ...signup, email: e.target.value });
                  }}
                />
                <div className="flex justify-between items-center relative">
                  <input
                    type={passOpen.pass ? "text" : "password"}
                    name=""
                    id=""
                    placeholder="Password :"
                    value={signup.password}
                    onChange={(e) => {
                      setsignup({
                        ...signup,
                        password: e.target.value,
                      });
                    }}
                    className="border-1 w-full border-border-color text-sm p-4 search-bar h-12"
                  />
                  <button
                    className="absolute right-4 "
                    onClick={() => {
                      setPassOpen({
                        ...passOpen,
                        pass: !passOpen.pass,
                      });
                    }}
                  >
                    {passOpen.pass ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-1 px-2">
                  <input type="checkbox" name="" id="cookie" />
                  <label htmlFor="cookie" className="text-xs">
                    Remember Me!
                  </label>
                </div>
                <button className="w-full h-12 text-white search-bar bg-gradient-to-r from-blue  to-second-color">
                  Login
                </button>
              </form>
              <p className="mt-5 text-sm text-center">
                Don&#39;t Have An Acoount?{" "}
                <span
                  onClick={() => {
                    setValue(0);
                  }}
                  className="underline text-blue hover:text-second-color cursor-pointer"
                >
                  {" "}
                  sign-up here.
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
