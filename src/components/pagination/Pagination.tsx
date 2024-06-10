import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded-lg ${
            i === currentPage
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700'
          } hover:bg-primary hover:text-white transition`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700 hover:bg-primary hover:text-white transition"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

// import React, { useState } from 'react';
// import Pagination from './Pagination';

// const App: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; // Replace with your actual total pages

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">My Pagination Example</h1>
//       {/* Your content here */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default App;
