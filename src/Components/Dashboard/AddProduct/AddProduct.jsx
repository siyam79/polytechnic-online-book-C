import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AddProducts = () => {
    const { register, handleSubmit, setValue, reset } = useForm();
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const [fields, setFields] = useState([]);
    const [fieldValues, setFieldValues] = useState([]);
    const axiosPuplic = useAxiosPublic()

    useEffect(() => {
        if (formData) {
            setImages(formData.images || []);
        }
    }, [formData, setValue]);


    const handleAddField = () => {
        const newFields = [{ fieldName: "" }, ...fields];
        setFields(newFields);
    };

    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);

        const newFieldValues = [...fieldValues];
        newFieldValues.splice(index, 1);
        setFieldValues(newFieldValues);
    };
    const handleFieldValueChange = (index, value) => {
        const newFieldValues = [...fieldValues];
        newFieldValues[index] = value;
        setFieldValues(newFieldValues);
    };



    // multipale image add fn 
    const handleImageChange = (files) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];

        for (let i = 0; i < files.length; i++) {
            newImages.push(URL.createObjectURL(files[i]));
            newFileNames.push(files[i].name);
        }

        setImages(newImages);
        setFileNames(newFileNames);
    };

    // image remove function
    const handleRemoveImage = (index) => {
        const newImages = [...images];
        const newFileNames = [...fileNames];
        newImages.splice(index, 1);
        newFileNames.splice(index, 1);
        setImages(newImages);
        setFileNames(newFileNames);
    };


    const onSubmit = async (data) => {
        try {
            setLoading(true);
            data.images = images;

            const { name, pepartment, pobidan, publisher, semester, description, } = data;

            const Book = {
                images,
                name, pepartment, pobidan, publisher, semester,
                description, specification_features: fieldValues,
                upload_time: new Date().toISOString(),
            };

            console.log(Book);

            const res = await axiosPuplic.post("/add-book", Book);
            if (res?.data) {
                toast.success(" Book Add successfully");
                reset()
                setImages([]);
                setFileNames([]);
                setFields([]);
                setFieldValues([]);
            }
        } catch (error) {
            console.error("Error adding Book:", error);
            toast.error("please Try Again")
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full px-2 lg:px-2 lg:py-4 bg-gray-100 rounded-lg  mb-9">
            <h1 className="text-center text-2xl font-bold text-gray-800 ">
                Book information
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <div className="lg:flex gap-5 ">
                        <div className="lg:w-8/12 w-full  rounded-md bg-gray-100 border-slate-600 lg:px-4 py-4 my-2 mb-5">
                            {/*  title */}
                            <div>
                                <label className="text-gray-800 text-lg ">
                                    {" "}
                                    Book Name{" "}
                                </label>
                                <input
                                    className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                    {...register("name")}
                                    placeholder="Book Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-2 ">
                                {/*  department */}
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg  ">Department</label>
                                    <select
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("pepartment")}
                                        required
                                    >
                                        <option value="">Select Department</option>

                                        <option value="Computer Science & Technology">Computer Science & Technology</option>
                                        <option value="Civil Technology">Civil Technology</option>
                                        <option value="Mechanical Technology">Mechanical Technology</option>
                                        <option value="Electrical Technology">Electrical Technology</option>
                                        <option value="Electronics Technology">Electronics Technology</option>
                                        <option value="Power Technology">Power Technology</option>
                                        <option value="Automobile Technology">Automobile Technology</option>
                                        <option value="Mechatronics Technology">Mechatronics Technology</option>
                                        <option value="Refrigeration & Air Conditioning Technology">Refrigeration & Air Conditioning Technology</option>
                                        <option value="Marine Technology">Marine Technology</option>
                                        <option value="Chemical Technology">Chemical Technology</option>
                                        <option value="Food Technology">Food Technology</option>
                                        <option value="Environmental Technology">Environmental Technology</option>
                                        <option value="Garments Design & Pattern Making Technology">Garments Design & Pattern Making Technology</option>
                                        <option value="Architecture Technology">Architecture Technology</option>
                                        <option value="Survey Technology">Survey Technology</option>
                                        <option value="Mining & Mine Survey Technology">Mining & Mine Survey Technology</option>
                                        <option value="Graphic Design Technology">Graphic Design Technology</option>
                                        <option value="Textile Technology">Textile Technology</option>
                                        <option value="Ceramic Technology">Ceramic Technology</option>
                                        <option value="Telecommunication Technology">Telecommunication Technology</option>
                                        <option value="Information Technology">Information Technology</option>
                                        <option value="Instrumentation & Process Control Technology">Instrumentation & Process Control Technology</option>
                                        <option value="Computer Operation Technology">Computer Operation Technology</option>
                                        <option value="Printing Technology">Printing Technology</option>
                                        <option value="Wood Technology">Wood Technology</option>
                                        <option value="Leather Technology">Leather Technology</option>
                                        <option value="Shipbuilding Technology">Shipbuilding Technology</option>
                                        <option value="Electromedical Technology">Electromedical Technology</option>
                                        <option value="Aircraft Maintenance Technology">Aircraft Maintenance Technology</option>
                                        <option value="Construction Technology">Construction Technology</option>
                                        <option value="Electrical Design & Drafting Technology">Electrical Design & Drafting Technology</option>
                                        <option value="Machine Tools Technology">Machine Tools Technology</option>
                                        <option value="Medical Electronics Technology">Medical Electronics Technology</option>
                                        <option value="Optical Technology">Optical Technology</option>
                                        <option value="Petrochemical Technology">Petrochemical Technology</option>
                                        <option value="Power Distribution & Transmission Technology">Power Distribution & Transmission Technology</option>
                                        <option value="Radio & Television Technology">Radio & Television Technology</option>
                                        <option value="Software Technology">Software Technology</option>
                                        <option value="Solar Technology">Solar Technology</option>
                                        <option value="Surveying & Mapping Technology">Surveying & Mapping Technology</option>
                                        <option value="Technical Drawing Technology">Technical Drawing Technology</option>
                                        <option value="Web Technology">Web Technology</option>


                                    </select>
                                </div>
                                {/*  semester */}
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg  ">Semester</label>
                                    <select
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("semester")}
                                        required
                                    >
                                        <option value="">Select Semester</option>

                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th ">5th</option>
                                        <option value="6th ">6th</option>
                                        <option value="7th ">7th</option>
                                        <option value="8th ">8th</option>
                                        1st
                                    </select>
                                </div>

                                {/* pobidan */}
                                <div className="w-full ">
                                    <label className="text-gray-800 text-lg  ">Pobidan</label>
                                    <select
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("pobidan")}
                                        required
                                    >
                                        <option value="">Select Pobidan</option>
                                        <option value="2010">2010</option>
                                        <option value="2016">2016</option>
                                        <option value="2022">2022</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label className="text-gray-800 text-lg ">
                                        {" "}
                                        Publisher{" "}
                                    </label>
                                    <select
                                        className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                        {...register("publisher")}
                                        required
                                    >
                                        <option value="">Select Publisher</option>
                                        <option value="Hoq">Hoq</option>
                                        <option value="Technical">Technical</option>
                                        <option value="Prime">Prime</option>
                                    </select>
                                </div>


                            </div>

                        </div>


                        {/* description */}
                        <div className="w-full lg:w-4/12 mt-3 ">
                            <h1 className="text-gray-800 text-lg mb-3 ">Description</h1>
                            <textarea
                                className="border lg:h-[150px] w-full  h-auto md:min-h-52 min-h-32 border-gray-400 px-4 py-2 text-gray-800  rounded-lg bg-gray-100  focus:outline-none focus:border-blue-500 "
                                {...register("description")}
                                placeholder="Description"
                            ></textarea>
                        </div>
                    </div>



                    {/* Dynamic add field button */}
                    <h1 className="text-center lg:text-left text-gray-900 font-semibold py-1 md:py-2 lg:py-3 lg:px-4 px-2 ">
                        {" "} Resource Information{" "}

                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:px-4 px-2 ">
                        {fields?.map((field, index) => (
                            <div key={index} className="">
                                <label className="text-gray-800 text-lg ">
                                    Resource Link {index + 1}
                                </label>
                                <input
                                    value={fieldValues[index] || ""}
                                    onChange={(e) =>
                                        handleFieldValueChange(index, e.target.value)
                                    }
                                    type="text"
                                    className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100  focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveField(index)}
                                    className="text-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        {/* Add Field button */}
                        <button
                            type="button"
                            onClick={handleAddField}
                            className="btn text-green-600"
                        >
                            Add Resource
                        </button>
                    </div>
                </div>
                {/* Image input */}
                <div className="mb-4 lg:px-4 ">
                    <div className="mt-6">
                        <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 items-center mt-2">
                            {images.map((image, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img
                                        src={image}
                                        alt={fileNames[index]}
                                        className="max-h-40 w-auto"
                                    />


                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-[#FF9D00] text-white p-1 rounded-full"
                                    >
                                        <MdDeleteOutline />
                                    </button>
                                </div>
                            ))}
                        </div>



                        <div>
                            <label className="block md:text-2xl text-gray-800  text-sm font-bold mb-2">Upload Image</label>


                            <div
                                onClick={() => document.querySelector("#image").click()}
                                className="cursor-pointer mt-4 p-4 border  rounded-md flex items-center justify-center"
                            >
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>

                                    </label>
                                </div>

                            </div>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                className="hidden"
                                multiple
                                onChange={(e) => handleImageChange(e.target.files)}
                            />
                        </div>



                    </div>
                </div>
                {/* Save button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className=" py-2 rounded-xl bg-[#62AB00] mb-6 text-[#fff] shadow-md px-6 font-semibold bg-slate-900"
                        disabled={loading}
                    >
                        {loading ? "Adding..." : "Add Book"}

                    </button>
                </div>
            </form>

        </section>
    );
};

export default AddProducts;