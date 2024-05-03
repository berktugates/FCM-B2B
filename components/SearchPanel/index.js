import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaSearch, FaTimes } from "react-icons/fa";
import categoryStore from "@/utils/categoryStore";
import Image from "next/image";
import Link from "next/link";

function SearchPanel({ toggleSearchPanel }) {
  const [searchResults, setSearchResults] = useState([]);

  const validationSchema = Yup.object().shape({
    searchinput: Yup.string().required(""),
  });

  const handleSubmit = (values, { resetForm }) => {
    const searchTerm = values.searchinput.toLowerCase();
    const results = [];

    categoryStore.getState().categories.forEach((category) => {
      category.products.forEach((product) => {
        if (product.name.toLowerCase().includes(searchTerm)) {
          results.push(product);
        }
      });
    });

    setSearchResults(results);
    resetForm();
  };

  useEffect(() => {
    // Başlangıçta bir arama yapmak için
    const initialSearchTerm = "initial search term"; // İstediğiniz varsayılan arama terimi
    handleSubmit({ searchinput: initialSearchTerm }, { resetForm: () => {} });
  }, []); // Boş bağımlılık dizisi, yalnızca bileşen monte edildiğinde bir kere çalışır

  return (
    <div className="w-full flex flex-col items-center justify-center transition-transform duration-500 ease-in-out shadow-[0_5px_20px_rgba(0,0,0,0.3)] py-[15px] z-[1000] rounded-xl ">
      <Formik
        initialValues={{ searchinput: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <div className="bg-white w-[400px]  flex items-center justify-center flex-col">
            <Form
              id="ajax-search"
              className="container mx-auto px-[30px] md:px-[15px] "
            >
              <div>
                <div className="relative text-[10px] uppercase text-[#555555] pt-10 flex items-center ">
                  <button
                    className="absolute top-1 md:top-0 right-0 "
                    type="button"
                    onClick={toggleSearchPanel}
                  >
                    <FaTimes className="w-[20px] h-[20px] text-[#555555] hover:text-red-600 hover:scale-110 transition duration-300 ease-in-out transform" />
                  </button>
                </div>

                <div className="relative border-2 border-LightBlue rounded-full  py-2 pr-2 hover:border-DarkBlue transition duration-300 ease-in-out transform pl-4">
                  <Field
                    name="searchinput"
                    placeholder="Search products..."
                    className={`form-control text-[15px] w-[310px] flex items-start font-bold lowercase outline-none ${
                      errors.searchinput && touched.searchinput
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <button
                    type="submit"
                    className="search absolute right-3 top-2"
                  >
                    <FaSearch className="w-[19px] h-[19px]  text-[#555555] hover:text-LightBlue hover:scale-110 transition duration-300 ease-in-out transform " />
                  </button>
                </div>
              </div>
              {errors.searchinput && touched.searchinput && (
                <div>{errors.searchinput}</div>
              )}
            </Form>
          </div>
        )}
      </Formik>{" "}
      <div>
        {searchResults.length > 0 && (
          <div className="w-[400px] mt-4 overflow-y-auto max-h-80 ">
            <ul>
              {searchResults.map((product) => (
                <li
                  className="p-5 border-b border-LightBlue flex flex-row justify-start gap-4"
                  key={product.id}
                >
                  <Image
                    src={product.imagesrc}
                    width={70}
                    height={70}
                    alt={product.name}
                  />
                  <Link
                    href={product.link}
                    className="flex items-center"
                  >
                    <span className=" flex text-start">
                      <p className="font-bold text-[16px] text-CustomGray hover:scale-105 hover:text-LightBlue transition-all transform easy-in-out duration-500">{product.name}</p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPanel;
