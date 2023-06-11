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
    <div className="w-full px-5 py-10 ">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 md:-mb-64 md:flex-row">
        <div className="flex flex-col gap-5 md:w-1/2 md:flex-row  md:justify-end  ">
          <div>
            <p className="text-sm font-semibold text-gray-600">CALL US</p>
            <p className="mb-5 mt-2 text-sm  text-gray-500">+41 0021-32-12</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">EMAIL</p>
            <p className="mb-5 mt-2 text-sm  text-gray-500">
              dev.meiti@gmail.com
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">ADDRESS</p>
            <p className="mb-5 mt-2 text-sm leading-7  text-gray-500">
              Iran, tabriz
              <br />
              Hojjati St, Azerbayjan <br /> St.golestan, P121
            </p>
          </div>
        </div>
        <div className="bottom-[16rem] md:relative md:w-1/2">
          <h2 className="mb-7 bg-transparent bg-gradient-to-r from-blue to-second-color bg-clip-text text-4xl font-semibold text-transparent">
            Contact form
          </h2>
          <div className="grid grid-cols-1 gap-5 border-2 border-second-color bg-white p-5 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-400">
                First name <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
                className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-400">
                Last name <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="text"
                value={form.lastname}
                onChange={(e) => {
                  setForm({ ...form, lastname: e.target.value });
                }}
                className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
                placeholder="Last name"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-400">
                Email <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-400">
                Phone number <sup className="text-red-600">*</sup> :
              </p>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                }}
                className="border-ellipse h-12 border-1 border-border-color p-4 text-sm"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="flex flex-col gap-3 md:col-span-2">
              <p className="text-sm font-semibold text-gray-400">Message :</p>
              <textarea
                className="border-ellipse  h-44 resize-none border-1 border-border-color p-4 text-sm text-gray-500"
                placeholder="How Can I Help You?"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                }}
              ></textarea>
            </div>
            <button className="border-ellipse h-11 w-52 bg-gradient-to-r from-blue to-second-color text-sm  font-semibold text-white">
              Send Message <span className="ml-3">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
