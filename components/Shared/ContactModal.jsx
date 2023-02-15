import React, { useState } from "react";
import style from "./ContactModal.module.css";
const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal ">
        <label
          className="modal-box relative modal-bottom sm:modal-middle bg-transparent"
          htmlFor=""
        >
          {" "}
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-outline btn-circle absolute right-8 top-8"
          >
            ✕
          </label>
          <div className={style.contact}>
            <div className={`relative ${style.inputContainer} mb-12`}>
              <input
                type="text"
                id="modalname"
                className="w-full border-b-2  focus:outline-none focus:border-b-primary"
                required
              />
              <label htmlFor="modalname" className=" mb-1 left-1 cursor-text">
                Full Name
              </label>
            </div>
            <div className={`relative ${style.inputContainer} mb-12`}>
              <input
                type="email"
                id="modalemail"
                className="w-full border-b-2  focus:outline-none focus:border-b-primary"
                required
              />
              <label htmlFor="modalemail" className=" mb-1 left-1 cursor-text">
                Email
              </label>
            </div>
            <div className={`relative ${style.inputContainer} mb-4`}>
              <input
                type="text"
                id="modaltext"
                className="w-full border-b-2  focus:outline-none focus:border-b-primary"
                required
              />
              <label htmlFor="modaltext" className=" mb-1 left-1 cursor-text">
                Your Message
              </label>
            </div>

            <button
              className={`btn normal-case button`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get a Quote
            </button>
          </div>
        </label>
      </label>
    </div>
  );
};

export default ContactModal;
