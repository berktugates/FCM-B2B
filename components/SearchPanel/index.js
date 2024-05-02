import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchPanel({ toggleSearchPanel }) {
  const validationSchema = Yup.object().shape({
    s: Yup.string().required("Please enter a search term"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted search term:", values.s);
    resetForm();
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-75 flex items-center justify-center transition-transform duration-500 ease-in-out">
      <Formik
        initialValues={{ s: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <div className="fixed top-0 left-0 right-0 z-50 bg-white w-full h-[55px] md:h-[165px] flex items-center justify-center flex-col">
            <Form
              id="ajax-search"
              className="container mx-auto px-[30px] md:px-[15px] "
            >
              <div className="max-w-[1250px]">
                <div className="relative text-[10px] uppercase text-[#555555] h-0 md:h-[57px] flex items-center ">
                  <span className="hidden md:flex">
                    What are you looking for?
                  </span>
                  <button
                    className="absolute top-1 md:top-0 right-0 "
                    type="button"
                    onClick={toggleSearchPanel}
                  >
                    <FaTimes className="w-[20px] h-[20px] text-[#555555] hover:text-red-600 hover:scale-110 transition duration-300 ease-in-out transform" />
                  </button>
                </div>

                <div className="relative md:border-b border-[#e4e4e4] ">
                  <Field
                    name="searchinput"
                    placeholder="Search products..."
                    className={`form-control w-[350px] md:max-w-[1140px] md:pb-[15px] pr-[30px] text-[15px] md:text-[30px] md:font-bold lowercase outline-none ${
                      errors.s && touched.s ? "is-invalid" : ""
                    }`}
                  />
                  <button
                    type="submit"
                    className="search absolute right-10 md:right-0 top-1 md:top-5"
                  >
                    <FaSearch className="w-[19px] md:w-[26px] h-[19px] md:h-[26px] text-[#555555] hover:text-LightBlue hover:scale-110 transition duration-300 ease-in-out transform " />
                  </button>
                </div>
              </div>
              {errors.s && touched.s && <div>{errors.s}</div>}
            </Form>
          </div>
        )}
      </Formik>{" "}
    </div>
  );
}

export default SearchPanel;
