
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import employees from "../libs/Employees";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function EmployeeDetails() {
    const { id } = useParams();
    const employee = employees.find(ele => ele.employeeId === id);

    const [isEditing, setIsEditing] = useState(false);
    const [editedEmployee, setEditedEmployee] = useState({ ...employee });

    const navigate = useNavigate()

    // function BackPage() {
    //     // navigate to employee details page
    //     navigate("/employeelist")
    // }
    const handelBackButton = () => {
        navigate("/employeelist")
    }

    useEffect(() => {
        setEditedEmployee({ ...employee });
    }, [employee]);

    const handleInputChange = (key, value) => {
        setEditedEmployee(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSave = () => {
        const index = employees.findIndex(e => e.employeeId === id);
        if (index !== -1) {
            employees[index] = editedEmployee;
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedEmployee({ ...employee });
    };

    return (
        <>
            <div className="h-10 w-20 rounded-full bg-red-500 flex justify-center items-center
            text-3xl font-semibold text-white absolute cursor-pointer m-2 hover:text-gray-600"
                onClick={handelBackButton}>
                <FaArrowAltCircleLeft />
            </div>
            <div className="w-[80%] m-auto bg-white shadow-xl rounded-lg max-h-[90vh] flex flex-col mt-0">

                {/* Header Section */}
                <div className="flex-none p-8 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-blue-700">
                            Employee {isEditing ? "Edit" : "Details"}
                        </h2>
                        <div className="flex gap-4">
                            {isEditing ? (
                                <button
                                    onClick={handleCancel}
                                    className="bg-gray-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-500 transition-colors"
                                > Cancel
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    Edit
                                </button>

                            )}
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto px-8 py-6">
                    <div className="grid grid-cols-3 gap-6">
                        {Object.entries(editedEmployee).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                                <label className="text-sm font-semibold text-gray-400 uppercase block mb-2">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                </label>
                                {isEditing ? (
                                    key === 'employeeId' ? (
                                        <p className="text-md text-gray-700 p-2 bg-gray-100 rounded">
                                            {value}
                                        </p>
                                    ) : (
                                        <input
                                            type={key == "email" ? "email" : key == "photo"
                                                ? "file" : key == "pin" || key == "salary" ? "number" : key == "dob" || key == "dateOfHire"
                                                    ? "date" : "text"}
                                            value={value || ""}
                                            onChange={(e) => handleInputChange(key, e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    )
                                ) : (
                                    <p className="text-lg text-gray-900 break-words p-2">
                                        {value || "N/A"}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fixed Footer Section */}
                {isEditing && (
                    <div className="flex-none border-t border-gray-200 bg-white py-6 px-8">
                        <div className="flex justify-end">
                            <button
                                onClick={handleSave}
                                className="bg-green-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}

export default EmployeeDetails;
