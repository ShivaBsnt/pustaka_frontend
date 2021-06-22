import styled from "styled-components";
export const SearchWrapper = styled.div`
  .btn-outline-secondary {
    color: white;
    border: none;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
    background: white !important;
  }
  .searchDiv {
    background: #82c0ff;
  }
  .btn-secondary {
    background-color: #f0ad4e !important;
  }
  .fa-search:before {
    font: 100px;
  }
  ..MuiAutocomplete-input {
    border: none !important;
  }

  .MuiOutlinedInput-root {
    position: relative;
    border-radius: 10px !important;
    
  }
  .MuiInputBase-root {
    background: white;
    border: none !important;
    outline: none !important;
  }
  // .MuiSvgIcon-root {
  //   height: 0 !important;
  // }

  root: {
    backgroundColor: "yellow"
  },
  clearIndicator: {
    backgroundColor: "gray",
    "& span": {
      "& svg": {
        backgroundColor: "red"
      }
    }
  },
  popupIndicator: {
    "& span": {
      "& svg": {
        "& path": {
          d: "path('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z')"
        }
      }
    }
  }
`;
