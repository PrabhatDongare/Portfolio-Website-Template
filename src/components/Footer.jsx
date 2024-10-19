// import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.mail,
      to_mail: "YOUR NAME",
      message: data.message,
    };

    // Email Service code is incomplete
    emailjs.send("", "", templateParams, "").then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Email sent successfully!");
      },
      (error) => {
        console.error("There was an error sending the email:", error.text);
        alert("Failed to send email!");
      },
    );

    reset();
  };

  return (
    <div
      id="contact"
      className="custom-blue-reverse rounded-t-[80px] pt-12 md:rounded-t-[180px]"
    >
      <h1 className="text-center text-4xl font-bold">CONTACT</h1>
      <div className="flex flex-col py-3 md:mx-64 md:flex-row md:gap-28 md:py-10">
        {/* Drop me message */}
        <div className="mx-5 text-center md:mx-0 md:w-1/2 md:text-left">
          <h1 className="pb-3 text-lg md:pb-6 md:text-2xl">
            Drop Me a Message
          </h1>
          <p className="md:w-11/12 md:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            mollitia molestias ipsum harum. Accusamus, distinctio cumque quod
            quisquam sint unde.
          </p>
          <div className="ml-10 md:ml-0">
            <div className="my-6 flex items-center gap-8">
              <FiPhone className="custom-blue rounded-lg p-1 text-3xl shadow-lg md:h-14 md:w-14 md:p-2" />
              <p className="font-roboto text-lg tracking-wider">
                +91 0000000000
              </p>
            </div>

            <div className="my-6 flex items-center gap-8">
              <MdOutlineMailOutline className="custom-blue rounded-lg p-1 text-3xl shadow-lg md:h-14 md:w-14 md:p-2" />
              <p className="font-roboto text-lg tracking-wider">
                <Link to="mailto:testmail@gmail.com"> testmail@gmail.com</Link>
              </p>
            </div>

            <div className="my-6 flex items-center gap-8">
              <FaLinkedinIn className="custom-blue rounded-lg p-1 text-3xl shadow-lg md:h-14 md:w-14 md:p-2" />
              <Link
                to="https://www.linkedin.com/in/"
                target="_blank"
                className="font-roboto text-lg tracking-wider"
              >
                linkedin.com/Name
              </Link>
            </div>

            <div className="my-6 flex items-center gap-8">
              <MdLocationOn className="custom-blue rounded-lg p-1 text-3xl shadow-lg md:h-14 md:w-14 md:p-2" />
              <p className="font-roboto text-lg tracking-wider">Pune, India</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="custom-blue mx-auto my-5 w-3/4 rounded-3xl py-5 font-roboto shadow-2xl md:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex h-full flex-col items-center justify-center gap-4 text-xl"
          >
            {/* Name */}
            <input
              {...register("name", {
                required: { value: true, message: "Please enter name" },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "* invalid entry",
                },
              })}
              className="w-3/4 rounded-xl bg-[#101630] p-3"
              placeholder="Name"
              width={21}
              autoComplete="off"
            />

            {/* Email */}
            <input
              {...register("email", {
                required: { value: true, message: "Please enter email" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email",
                },
              })}
              className="w-3/4 rounded-xl bg-[#101630] p-3"
              placeholder="Email"
              width={50}
              autoComplete="off"
            />

            {/* Message */}
            <textarea
              {...register("message", {
                required: { value: true, message: "Please enter a message" },
              })}
              className="w-3/4 rounded-xl bg-[#101630] p-3"
              placeholder="Send me a message"
              rows={5}
              autoComplete="off"
            />

            {/* Submitting */}
            <div className="text-center">
              {errors.name ? (
                <div className="text-base text-red-500">
                  {errors.name.message}
                </div>
              ) : errors.email ? (
                <div className="text-base text-red-500">
                  {errors.email.message}
                </div>
              ) : (
                errors.message && (
                  <div className="text-base text-red-500">
                    {errors.message.message}
                  </div>
                )
              )}

              <input
                className="mt-1 w-40 rounded-xl bg-[#101630] py-3"
                disabled={isSubmitting}
                type="submit"
                value="SEND"
              />
            </div>
          </form>
        </div>
      </div>

      <hr />
      <p className="flex items-center justify-center gap-2 py-7 font-roboto text-lg tracking-wide">
        Made with
        <FaHeart className="text-pink-500" />
        by NAME
      </p>
    </div>
  );
};

export default Footer;
