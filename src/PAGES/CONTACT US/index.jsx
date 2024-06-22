import React from "react";

const services = [
  {
    id: 1,
    title: "Sales",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "1800 123 4567",
  },
  {
    id: 2,
    title: "Complaints",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "1900 223 8899",
  },
  {
    id: 3,
    title: "Returns",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "returns@mail.com",
  },
  {
    id: 4,
    title: "Marketing",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    contact: "1700 444 5578",
  },
];

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#f5f7f9] via-[#ecf0f4] to-[#ffffff]">
      {/* Hero */}
      <div
        className="w-full h-[48vh] bg-[#1F576D] bg-no-repeat bg-cover bg-bottom bg-fixed"
        style={{ backgroundImage: "url(./bg-contact.jpg)" }}
      >
        <div className="bg-black/50 w-full h-full flex justify-center items-center">
          <h1 className="text-3xl md:text-7xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>
      {/* Section-1 */}
      <div className="flex flex-col justify-center items-center gap-10 py-14">
        <div className="flex flex-col justify-center items-center gap-5 md:w-3/5 text-center">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium text-[#6EC1E4] tracking-wider">
              Have any queries?
            </p>
            <h3 className="text-3xl md:text-5xl font-semibold text-[#6EC1E4]">
              We're here to help.​
            </h3>
          </div>
          <div className="h-px w-14 bg-black"></div>
        </div>
        {/* Card */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          {services.map((service) => {
            const { id, title, desc, contact } = service;
            return (
              <div
                key={id}
                className="flex flex-col justify-center items-center gap-3 px-5 md:px-1 lg:px-2 py-10 mx-4 md:mx-0 bg-white md:w-48 lg:w-72 rounded-md shadow-xl hover:shadow-2xl duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-300 tracking-wider">
                  {title}
                </h3>
                <p className="text-center leading-7 text-slate-400">{desc}</p>
                <p className="text-lg tracking-wider text-blue-500 font-semibold">
                  {contact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Section-2 */}
      <div className="grid md:grid-cols-2 py-10 border-b md:pb-40 lg:px-20">
        <div className="flex flex-col items-center md:items-start gap-5 px-4 md:px-8 py-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-semibold text-[#6EC1E4] tracking-wider">
              Don't be a stranger!
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#6EC1E4]">
              You tell us. We listen.
            </h3>
          </div>
          <p className="text-slate-500 leading-7 text-center md:text-start text-sm  px-1">
            Cras elementum finibus lacus nec lacinia. Quisque non convallis
            nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend
            magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>

        <div className="w-full h-full hidden md:block">
          <div className="bg-white h-72 py-20 mx-auto rounded-md shadow-lg hover:shadow-2xl duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
