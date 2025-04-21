
import { useState } from "react";

function AddEmployee() {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [formData, setFormData] = useState({
        photo: null,
        firstName: '',
        lastName: '',
        dob: '',
        employeeId: '',
        email: '',
        employeeType: '',
        employeeStatus: '',
        department: '',
        city: '',
        pin: '',
        pan: '',
        salary: '',
        dateOfHire: '',
        employeeEndDate: ''
    });

    const handleInputChange = (e) => {
        const { name, value, files, type } = e.target;

        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const validateForm = () => {
        // Custom validation checks
        const errors = [];

        // PAN format validation (5 letters, 4 numbers, 1 letter)
        if (!/^[A-Z]{5}\d{4}[A-Z]{1}$/.test(formData.pan)) {
            errors.push('PAN must be in format: ABCDE1234F');
        }

        // PIN length validation
        if (formData.pin.length !== 6) {
            errors.push('PIN must be 6 digits');
        }

        // Salary validation
        if (parseFloat(formData.salary) < 0) {
            errors.push('Salary must be positive');
        }

        // Date validation
        if (showAdvanced && new Date(formData.employeeEndDate) < new Date(formData.dateOfHire)) {
            errors.push('End date cannot be before hire date');
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (validationErrors.length === 0) {
            console.log('Form data:', formData);
            // Submit form logic here
        } else {
            alert(validationErrors.join('\n'));
        }
    };

    return (
        <>
            <div className="min-h-screen absolute w-full top-0 left-0 z-50 bg-opacity-50 bg-blue-300 text-2xl font-semibold flex items-center justify-center">
                <div className="p-6 bg-white rounded-lg shadow-md lg:w-1/2 w-full">
                    <h1 className="text-2xl font-bold mb-6 text-center">New Employee</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Upload Photo */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Photo
                            </label>
                            <div className="mt-1 flex items-center">
                                <input
                                    type="file"
                                    name="photo"
                                    onChange={handleInputChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    accept="image/*"
                                />
                            </div>
                        </div>

                        {/* Name Section */}
                        <div className="grid grid-cols-2 gap-x-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* DOB & Employee ID */}
                        <div className="grid grid-cols-2 gap-x-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    DOB <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Employee ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="employeeId"
                                    value={formData.employeeId}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Email & Employee Type */}
                        <div className="grid grid-cols-2 gap-x-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Employee Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="employeeType"
                                    value={formData.employeeType}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Contractor</option>
                                </select>
                            </div>
                        </div>

                        {/* Employee Status & Department */}
                        <div className="grid grid-cols-2 gap-x-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Employee Status <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="employeeStatus"
                                    value={formData.employeeStatus}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                    <option>On Leave</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Department <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option>Cooking Staff</option>
                                    <option>Management Staff</option>
                                    <option>Cleaning Staff</option>
                                    <option>Supporting Staff</option>
                                    <option>Security Staff</option>
                                </select>
                            </div>
                        </div>

                        {/* City and PIN */}
                        <div className="grid grid-cols-2 gap-x-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    PIN <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="pin"
                                    value={formData.pin}
                                    onChange={handleInputChange}
                                    required
                                    pattern="\d{6}"
                                    title="6-digit PIN code"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* PAN and Salary */}
                        <div className="grid grid-cols-2 gap-x-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    PAN <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="pan"
                                    value={formData.pan}
                                    onChange={handleInputChange}
                                    required
                                    pattern="[A-Z]{5}\d{4}[A-Z]{1}"
                                    title="PAN in format: ABCDE1234F"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Salary <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleInputChange}
                                    required
                                    min="0"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Date of Hire */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date of Hire <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="dateOfHire"
                                value={formData.dateOfHire}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Advanced Fields */}
                        {showAdvanced && (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Employee End Date
                                </label>
                                <input
                                    type="date"
                                    name="employeeEndDate"
                                    value={formData.employeeEndDate}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="text-blue-600 hover:text-blue-800 text-sm mb-6"
                        >
                            {showAdvanced ? 'Hide Advanced Fields' : 'Show Advanced Fields'}
                        </button>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Create Employee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddEmployee;
