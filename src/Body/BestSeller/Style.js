import styled from "styled-components";
export const BestSellerWrapper = styled.div`
  h3 {
    text-align: left;
  }
  .view {
    float: right;
  }
  .btn-default {
    color: #fff;
    background-color: #f0ad4e !important;
  }
  // Small devices (landscape phones, 576px and up)
  @media (max-width: 576px) {
    .card__book {
      width: "18rem";
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
    }
    .card {
      width: "18rem";
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  }
`;
