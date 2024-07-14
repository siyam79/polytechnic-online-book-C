import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';

export default function AllBook() {
  const location = useLocation();
  const books = location.state?.books || [];

  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filters, setFilters] = useState({
    department: '',
    semester: '',
    pobidan: '',
    publisher: ''
  });

  useEffect(() => {
    let filtered = books;

    if (filters.department) {
      filtered = filtered.filter(book => book.department === filters.department);
    }

    if (filters.semester) {
      filtered = filtered.filter(book => book.semester === filters.semester);
    }

    if (filters.pobidan) {
      filtered = filtered.filter(book => book.pobidan === filters.pobidan);
    }

    if (filters.publisher) {
      filtered = filtered.filter(book => book.publisher === filters.publisher);
    }

    setFilteredBooks(filtered);
  }, [filters, books]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
        {/* Department */}
        <div className="w-full">
          <label className="text-gray-800 text-lg">Department</label>
          <select
            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            name="department"
            value={filters.department}
            onChange={handleFilterChange}
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
        {/* Semester */}
        <div className="w-full">
          <label className="text-gray-800 text-lg">Semester</label>
          <select
            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            name="semester"
            value={filters.semester}
            onChange={handleFilterChange}
          >
            <option value="">Select Semester</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
            <option value="5th">5th</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
          </select>
        </div>
        {/* Pobidan */}
        <div className="w-full">
          <label className="text-gray-800 text-lg">Pobidan</label>
          <select
            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            name="pobidan"
            value={filters.pobidan}
            onChange={handleFilterChange}
          >
            <option value="">Select Pobidan</option>
            <option value="2010">2010</option>
            <option value="2016">2016</option>
            <option value="2022">2022</option>
          </select>
        </div>
        {/* Publisher */}
        <div className="w-full">
          <label className="text-gray-800 text-lg">Publisher</label>
          <select
            className="w-full px-4 py-3 border-gray-600 text-gray-800 border rounded-md bg-gray-100 focus:outline-none focus:border-blue-500"
            name="publisher"
            value={filters.publisher}
            onChange={handleFilterChange}
          >
            <option value="">Select Publisher</option>
            <option value="Hoq">Hoq</option>
            <option value="Technical">Technical</option>
            <option value="Prime">Prime</option>
          </select>
        </div>
      </div>

      {/* Books Data */}
      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 md:gap-4 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, i) => <BookCard key={i} book={book} />)
        ) : (
         
            <p className=" text-center col-span-full min-h-screen items-center justify-center text-gray-500 lg:mt-20 mt-4 ">No books found.</p>
         
        )}
      </div>
    </>
  );
}
