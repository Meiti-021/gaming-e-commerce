import { useState } from "react";

const ContactBody = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <div className="w-full px-5 py-10 font-first-font">
      <div className="w-full max-w-7xl mx-auto relative flex flex-col md:flex-row gap-10 md:-mb-64">
        <div className="md:w-1/2 flex flex-col md:flex-row md:justify-end  gap-5  ">
          <div>
            <p className="text-sm font-semibold text-gray-600">CALL US</p>
            <p className="text-sm mt-2 mb-5  text-gray-500">+41 0021-32-12</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">EMAIL</p>
            <p className="text-sm mt-2 mb-5  text-gray-500">
              dev.meiti@gmail.com
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">ADDRESS</p>
            <p className="text-sm leading-7 mt-2 mb-5  text-gray-500">
              Iran, tabriz
              <br />
              Hojjati St, Azerbayjan <br /> St.golestan, P121
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:relative bottom-[16rem]">
          <h2 className="text-4xl mb-7 font-semibold bg-clip-text bg-transparent bg-gradient-to-r from-blue to-second-color text-transparent">
            Contact form
          </h2>
          <div className="border-2 border-second-color p-5 gap-5 grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 font-semibold">
                First name <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                className="border-1 border-border-color text-sm p-4 search-bar h-12"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 font-semibold">
                Last name <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="text"
                value={form.lastname}
                onChange={(e) => {
                  setForm({ ...form, lastname: e.target.value });
                }}
                className="border-1 border-border-color text-sm p-4 search-bar h-12"
                placeholder="Last name"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 font-semibold">
                Email <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                className="border-1 border-border-color text-sm p-4 search-bar h-12"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 font-semibold">
                Phone number <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                }}
                className="border-1 border-border-color text-sm p-4 search-bar h-12"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <p className="text-sm text-gray-400 font-semibold">Message :</p>
              <textarea
                className="border-1  text-gray-500 resize-none border-border-color text-sm p-4 search-bar h-44"
                placeholder="How Can I Help You?"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                }}
              ></textarea>
            </div>
            <button className="search-bar text-sm h-11 w-52 bg-gradient-to-r from-blue to-second-color  text-white font-semibold">
              Send Message <span className="ml-3">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
