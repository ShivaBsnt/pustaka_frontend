import styled from "styled-components";
export const HeadWrapper = styled.div`
  font-family: "Pacifico", cursive;
  .navbar-nav a {
    color: white;
  }
  .navbar {
    background-color: #002245 !important;
  }
  .leftNav {
    margin-right: auto;
    margin-left: auto;
  }
  .d-flex {
    display: initial !important;
  }
  .navbar.navbar-dark .breadcrumb .nav-item .nav-link,
  .navbar.navbar-dark .navbar-nav .nav-item .nav-link.active {
    color: #ffdb58;
    transition: 0.35s;
    // background: white;
    border-bottom: white !important;
  }
`;
