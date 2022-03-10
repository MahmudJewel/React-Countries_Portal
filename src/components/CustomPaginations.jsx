import { useState } from "react";
import { Pagination } from "antd";
import SingleContent from "./SingleContent";
import '../assets/customPagination.css'
const CustomPaginations = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(50);

  //   get current posts
  const indexOfLaspage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLaspage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLaspage);

  // set post show on per page dynamically
  const onShowSizeChange = (currentPage, pageSize) => {
    setPostPerPage(pageSize);
  };

  return (
    <div>
      <div className="home">
        {currentPosts &&
          currentPosts.map((item) => (
            <SingleContent
              key={item.population}
              name={item.name}
              region={item.region}
              capital={item.capital}
              population={item.population}
              flags={item.flags}
              area={item.area}
              language={item.languages}
            />
          ))}
      </div>
      {/* ant paginations  */}
      <div className='customP mt-5 p-1'>
      <Pagination
        className="mb-3 text-danger"
        onChange={(v) => setCurrentPage(v)}
        pageSize={postPerPage}
        total={posts.length}
        current={currentPage}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
      />
      </div>
    </div>
  );
};

export default CustomPaginations;
