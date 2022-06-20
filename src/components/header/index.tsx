import React, { CSSProperties } from "react";
import { Button, Image } from "react-bootstrap";
import { Menu, Search, Close } from '@mui/icons-material';
import { makeSectionInnerMenu } from "src/shared";
import { TextField } from "@mui/material";


let logo = <Image width={85} height={85} className="img-fluid" alt="Main logo" src="/assets/rfa_logo_final.png" style={{
  maxWidth: 85,
}}></Image>;

let menuButton = <>
  <Menu className="text-white mb-0" style={{
    // height: "100px"
    fontSize: "xxx-large"
  }}>
  </Menu>
  <br></br>
  <span className="text-white">Menu</span>
</>;

let closeButton = <>
  <Close className="text-white mb-0" style={{
    // height: "100px"
    fontSize: "xxx-large"
  }}>
  </Close>
  <br></br>
  <span className="text-white">Close</span>
</>;

let searchButton = <Search className="border rounded text-palette1-4 border-palette1-4" style={{
  fontSize: "xx-large",
  borderColor: "#3068AD !important",
  height: "50px",
  width: "50px",
}}></Search>;

let searchButtonAlt = <Search className="border rounded bg-palette1-5 text-white border-palette1-5" style={{
  fontSize: "xx-large",
  height: "50px",
  width: "50px",
}}></Search>;

let navSimpleLinks = Array.from([
  "Home",
  "News & Events",
  "About us",
  "Contact Us",
  "Boards & Committees"
]);

export const Header: React.FC = () => {
  let page =
    <div className="row d-flex align-items-center">
      {/* logo etc / leftside nav */}
      <div className="col-12 col-lg-7 p-0">
        <nav className="navbar navbar-expand-md navbar-light btn-palette1-4 p-0">
          <div className="col-2 col-md-1 p-0">
            <div className="row m-0 p-0">
              {/* actual navbar/nav bar ================= */}
              <Button className="btn-palette1-4 pr-0 collapsed"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                style={{
                  width: "100%",
                  border: "none"
                }} type="button">
                <span className="if-collapsed">{menuButton}</span>
                <span className="if-not-collapsed">{closeButton}</span>
              </Button>
            </div>
          </div>
          <div className="col-10 col-md-11 bg-white p-1 mx-auto w-100 ">
            <div className="nav-link d-flex align-items-center pl-0 pr-2" style={{
              fontSize: "calc(9.5px + 1vmin)"
            }}>
              {/* float-left */}
              <a className="pr-2 pl-1" href="/">
                {logo}
              </a>
              <div>
                <span className="text-palette1-2 h6 font-family-roboto-slab text-uppercase" style={{
                  fontWeight: "580",
                  // fontSize: "18px"
                  fontSize: "calc(11px + 1vmin)"
                }}>SOUTH CAROLINA</span><br></br>
                <span className="text-palette1-2 h6 font-family-roboto-slab text-uppercase" style={{
                  fontWeight: "580",
                  // fontSize: "18px"
                  fontSize: "calc(11px + 1vmin)"
                }}>REVENUE AND FISCAL AFFAIRS OFFICE</span><br></br>
                <span className="h6 font-italic text-palette1-6" style={{
                  fontSize: "calc(6.5px + 1vmin)"
                }}>
                  Transforming data into solutions for South Carolina
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="col-xs-12 col-lg-5">
        {/* about us, events, boards & committees (base menu) */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
          <div className="container-fluid TODO">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              { /* this is used to push nav to right */}
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li key={1} className="d-none"></li>
              </ul>
              <ul className="navbar-nav mt-2 mt-lg-0 text-uppercase small pr-2">
                <li key={1} className="nav-item text-palette1-2">
                  <a className="nav-link text-palette1-2" href="#">About us</a>
                </li>
                <li key={2} className="nav-item text-palette1-2">
                  <a className="nav-link text-palette1-2" href="#">Events</a>
                </li>
                <li key={3} className="nav-item text-palette1-2">
                  <a className="nav-link text-palette1-2" href="#">Boards & Committees</a>
                </li>
              </ul>

              {/* seperate code here for search glass */}
              <ul className="navbar-nav mt-2 mt-lg-0 text-uppercase d-none d-md-block">
                <li key={1} className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle caret-off collapsed"
                    href="#"
                    data-toggle="dropdown"
                    id="navbarDropdown"
                    role="button"
                    aria-label="Toggle search (top right)"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="if-collapsed">{searchButton}</span>
                    <span className="if-not-collapsed">{searchButtonAlt}</span>
                  </a>

                  {/* mt-0 pt-5 p-3 */}
                  <div className="dropdown-menu dropdown-menu-right p-4 bg-palette1-5" aria-labelledby="navbarDropdown" style={{
                    marginTop: "-19% !important",
                    marginRight: "13% !important",
                    borderTop: "none",
                    minWidth: "435px"
                  }}>
                    <form className=""
                      id="search-top-section"
                      aria-labelledby="navbarDropdown"
                      role="search"
                      style={{
                        display: "inline"
                      }}>
                      <div className="form-group">
                        <TextField
                          className="form-control bg-white"
                          style={{ minWidth: "70%" }}
                          variant="outlined"
                          placeholder="Search rfa.sc.gov"
                          aria-label="Sitewide search"
                          id="search-top"
                          sx={{ borderRadius: 1 }} />
                        <button aria-label="Sitewide search button" onClick={function () { console.log('do something!'); }} style={
                          {
                            borderRadius: 1,
                            padding: "14px 14px",
                            borderColor: "white !important"
                          }} className="btn btn-palette1-5 border-white ml-2 text-white">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>

      {/* manual menu invocation */}
      <div className="col-12" style={{
        borderBottom: "10px solid #1B3A61"
      }}>
        <div className="collapse multi-collapse" id="multiCollapseExample1">
          <div className="row">
            <div className="col-md-3 col-12 text-center bg-palette4-8 rounded pr-0">
              <ul className="navbar-nav px-0 mx-lg-5 mx-1 pt-4 pb-4">
                {
                  navSimpleLinks.map((item, index) => {
                    return <li className="nav-item" key={index} style={{
                      borderBottom: (index + 1) == navSimpleLinks.length ? "intial" : "1px solid #ccc",
                      fontWeight: "bold"
                    }}>
                      <a key={index} className="nav-link text-palette1-2" href="#">
                        {item}
                      </a>
                    </li>;
                  })
                }
              </ul>
            </div>
            <div className="col-md-9 col-12 rounded">
              <div className="row ml-2 mt-2 p-4">
                {
                  makeSectionInnerMenu("data & research", [
                    "Economy",
                    "State Finances",
                    "Education",
                    "Healthcare",
                    "Local Government",
                    "Population & Demographics",
                    "Presentations",
                    "State Finances",
                    "Inflation Adjustments for Legal Proceedings"
                  ])
                }

                {
                  makeSectionInnerMenu("Geography & Mapping", [
                    "Transportation Carrier Network (Uber)",
                    "SC Real Time Network",
                    "SC State GIS",
                    "Maps",
                    "Interactive Mapping",
                    "Statewide Aerial Imagery"
                  ])
                }

                {
                  makeSectionInnerMenu("programs & services", [
                    "Precinct Demographics and Redistricting",
                    "State 911 Network",
                    "Data Services and Online Solution",
                    "Geodetic Survey",
                    "Fiscal Analysis",
                    "2020 Census"
                  ])
                }

                {
                  makeSectionInnerMenu("legislative fiscal impacts", [
                    "Current General Assembly Session",
                    "Previous General Assembly Session",
                    "Forms"
                  ])
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>;

  return page;
}
