import React from "react";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";

const PaginationPage = ({ postsPerPage, totalPost, paginate, currentPage }) => {
  console.log("this is a total post", totalPost);
  console.log("this is a total postperpage", postsPerPage);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <MDBRow>
      <MDBCol>
        <div style={{ height: 100 }}></div>
        <MDBPagination circle color="blue">
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">
              <span>First</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          {pageNumber.map((number) => (
            <MDBPageItem className={(currentPage === number ? 'active ' : '')}>
              <MDBPageNav
                key={number}
                className="page-link "
                onClick={() => paginate(number)}
              >
                {number}
              </MDBPageNav>
            </MDBPageItem>
          ))}

          <MDBPageItem>
            <MDBPageNav className="page-link">&raquo;</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">Last</MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  );
};

export default PaginationPage;
