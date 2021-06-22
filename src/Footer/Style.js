import styled from "styled-components";
export const FooterWrapper = styled.div`
  font-family: "Pacifico", cursive;
  footer.page-footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
  .blue {
    background-color: #535353 !important;
    text-align: center !important;
  }

  @media (max-width: 576px) {
    .text-start {
      text-align: center !important;
    }
    .connect {
      font-size: 14px !important;
    }
  }
 
`;
