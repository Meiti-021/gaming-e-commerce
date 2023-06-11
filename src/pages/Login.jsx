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
    <div className=" ">
      <PageHero
        title="Sign-in/Sign-up"
        subtitle="Unlock Your Gaming Potential and Dive into the Action!"
        className="h-42 pb-5"
      />
      <div className="h-[46rem]  w-full p-5 py-4">
        <div className="mx-auto w-full max-w-md">
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
                className="mt-10 grid h-auto w-full max-w-md grid-cols-1 gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name :"
                  className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
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
                  className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
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
                  className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
                  value={loginForm.email}
                  onChange={(e) => {
                    setLogin({ ...loginForm, email: e.target.value });
                  }}
                />
                <div className="relative flex items-center justify-between">
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
                    className="border-ellipse h-12 w-full border-1 border-border-color p-4 text-sm"
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
                <div className="relative flex items-center justify-between">
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
                    className="border-ellipse h-12 w-full border-1 border-border-color p-4 text-sm"
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
                  <p className="mb-3 text-sm">Choose an avatar:</p>
                  <div className="grid grid-cols-6 gap-3">
                    {avatars.map((avatar, index) => {
                      return (
                        <button
                          className={`h-16 w-16 overflow-hidden rounded-md p-1 ${
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
                            className="block h-full  w-full rounded-md object-cover object-center"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-3 px-2">
                  <input type="checkbox" name="" id="policy" />
                  <label htmlFor="policy" className="text-xs">
                    By checking this box, I agree to the{" "}
                    <Link to="" className="text-blue underline">
                      Privacy Policy
                    </Link>
                    {"  "}
                    and
                    {"  "}
                    <Link to="" className="text-blue underline">
                      Terms of Service
                    </Link>
                    .
                  </label>
                </div>
                <div className="mb-1 flex items-center gap-3 px-2">
                  <input type="checkbox" name="" id="cookie" />
                  <label htmlFor="cookie" className="text-xs">
                    Remember Me!
                  </label>
                </div>
                <button className="border-ellipse h-12 w-full bg-gradient-to-r from-blue to-second-color  text-white">
                  Create Account
                </button>
              </form>
              <p className="mt-5 text-center text-sm">
                Already Have An Acoount?{" "}
                <span
                  onClick={() => {
                    setValue(1);
                  }}
                  className="cursor-pointer text-blue underline hover:text-second-color"
                >
                  {" "}
                  sign-in here.
                </span>
              </p>
            </div>
          ) : (
            <div>
              <form
                className="mt-10 grid h-auto w-full max-w-md grid-cols-1 gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email :"
                  className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
                  value={signup.email}
                  onChange={(e) => {
                    setsignup({ ...signup, email: e.target.value });
                  }}
                />
                <div className="relative flex items-center justify-between">
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
                    className="border-ellipse h-12 w-full border-1 border-border-color p-4 text-sm"
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

                <div className="mb-1 flex items-center gap-3 px-2">
                  <input type="checkbox" name="" id="cookie" />
                  <label htmlFor="cookie" className="text-xs">
                    Remember Me!
                  </label>
                </div>
                <button className="border-ellipse h-12 w-full bg-gradient-to-r from-blue to-second-color  text-white">
                  Login
                </button>
              </form>
              <p className="mt-5 text-center text-sm">
                Don&#39;t Have An Acoount?{" "}
                <span
                  onClick={() => {
                    setValue(0);
                  }}
                  className="cursor-pointer text-blue underline hover:text-second-color"
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
