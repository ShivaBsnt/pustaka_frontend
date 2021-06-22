import React, { Component, Fragment } from "react";
import {
  Row,
  Form,
  Col,
  Button,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import { IconButton } from "@material-ui/core";
import { SearchWrapper } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = (theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
});
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestsellers: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:90/book")
      .then((response) => this.setState({ bestsellers: response.data.data }))
      .catch((err) => console.log("error", err));
  }
  clicked = () => {
    console.log("clicked from autocomplete");
  };
  search = () => {
    console.log("search");
  };

  render() {
    const classes = useStyles;
    return (
      <SearchWrapper>
        <Container
          fluid
          className="HOME"
          style={{
            backgroundColor: "red",
            background: `url('${process.env.PUBLIC_URL}/background1.jpg')`,
            backgroundPosition: "top center",
            // backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        >
          <div style={{ height: 130 }}></div>
          <Row>
            <Col></Col>
            <Col md={6}>
              <h2 style={{ color: "white" }}>
                SELL, BUY OR RENT BOOKS & eTEXTBOOKS
              </h2>
              <div style={{ height: 20 }}></div>
              <div style={{ height: 90 }}>
                <Autocomplete
                  id="highlights-demo"
                  freeSolo
                  options={this.state.bestsellers}
                  disableClearable
                  getOptionLabel={(option) => option.title}
                  classes={classes}
                  autoComplete={true}
                  clearOnBlur={true}
                  clearOnEscape={true}
                  autoHighlight={true}
                  renderInput={(params) => (
                    <div style={{ position: "relative" }}>
                      <TextField
                        {...params}
                        placeholder="Search by Title"
                        variant="outlined"
                        margin="normal"
                        onChange={(event, value) =>
                          console.log(event.target.value)
                        }
                        style={{ textIndent: 30 }}
                      />{" "}
                      {/* <Link to="/about"> */}{" "}
                      <FontAwesomeIcon
                        icon={faSearch}
                        onClick={this.search}
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          right: 20,
                          top: 30,
                          width: 20,
                          height: 20,
                          color: "#F95700FF",
                        }}
                      />
                      {/* </Link>s */}
                    </div>
                  )}
                  renderOption={(option, { inputValue }) => {
                    const matches = match(option, inputValue);
                    const parts = parse(option, matches);

                    return (
                      <div>
                        {parts.map((part, index) => (
                          <Fragment
                            key={part.text._id}
                            onClick={() => console.log(part.text._id)}
                          >
                            {" "}
                            <IconButton color="primary">
                              <img
                                style={{ height: 60, width: 50 }}
                                src={`http://localhost:90/images/${option.cover_page}`}
                              ></img>
                            </IconButton>
                            <span
                              style={{ fontWeight: part.highlight ? 700 : 400 }}
                            >
                              {part.text.title + " (" + part.text.author + ")"}
                            </span>
                          </Fragment>
                        ))}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col></Col>
          </Row>
          <div style={{ height: 60 }}></div>
        </Container>
      </SearchWrapper>
    );
  }
}
export default withStyles(useStyles)(Search);
