import React, { CSSProperties } from "react";
import { Footer, Header, } from "@components";
import { Button, Card, CardContent, TextField } from "@mui/material";
import Image from "next/image";
import { Search, KeyboardArrowUp, LocationOn, AccessTime, ContactPageOutlined } from '@mui/icons-material';
import { makeHorizontalRuler } from "src/shared";
import { NextSeo } from "next-seo";

let styles = {
  // backgroundColor: "",
  backgroundImage: "url('/assets/shutterstock_42474535.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "386px",
  color: "white"
} as CSSProperties;

let badgeStyle = {
  fontSize: "xx-small",
  fontWeight: "500",
  borderRadius: "1.5px"
} as CSSProperties;

type RecentUpdate = {
  link: string | null;
  name: string;
  loremIpsum: string | null;
  published: Date;
  label: string;
}

type CalenderEvent = {
  name: string;
  month: string;
  day: string;
  label: string;
  time: string
  phonenumber: string;
  labelCSS: string | null;
  address: string;
}

let sectionCards = Array.from(new Map<string, string>([
  ["Data & Research", "/assets/section2/2-1.svg"],
  ["Geography & Mapping", "/assets/section2/2-2.svg"],
  ["Programs & Services", "/assets/section2/2-3.svg"],
  ["Legislative Fiscal Impacts", "/assets/section2/2-4.svg"]
]));

let popularServicesAndLinks = ["Overview and History of the South Carolina State Budget",
  "Overview and History of the South Carolina State Budget",
  "Overview and History of the South Carolina State Budget",
  "Employer Contribution Trends",
  "Employer Contribution Trends - June 4, 2019",
  "Employer Contribution Trends - June 4, 2019",
  "Appropriation Bill and Acts",
  "Executive Budget Office State Agency Plans(Requests)",
  "Executive Budget Office State Agency Plans(Requests)"];

let recentUpdates: RecentUpdate[] = [
  {
    link: null,
    name: "Local Government Finance",
    loremIpsum: "is simply dummy text of the printing and typesetting industry...",
    published: new Date("2020-01-03"),
    label: "Updated"
  },
  {
    link: null,
    name: "Transportation Network Carrier Maps",
    loremIpsum: null,
    published: new Date("2020-01-03"),
    label: "New"
  },
  {
    link: null,
    name: "BFA Long-Range General Fund Revenue for FY 2019-20 to FY 2022-23",
    loremIpsum: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...",
    published: new Date("2019-12-17"),
    label: "Updated"
  },
  {
    link: null,
    name: "Budget Development",
    loremIpsum: null,
    published: new Date("2019-12-17"),
    label: "New"
  },
  {
    link: null,
    name: "November 2019 General Fund Revenue Digest",
    loremIpsum: null,
    published: new Date("2019-12-14"),
    label: "New"
  },
];

let calendarOfEvents: CalenderEvent[] = [
  {
    name: "Board of Economic Advisors Meeting",
    month: "Nov",
    day: "22",
    label: "Updated",
    time: "1:30PM",
    phonenumber: "(803) 734-2265",
    labelCSS: "bg-palette3-2",
    address: "Room 417, Bowers Conference Room, Rembert Dennis Building"
  },
  {
    name: "Board of Economic Advisors Meeting",
    month: "Nov",
    day: "23",
    label: "Cancelled",
    time: "1:30PM",
    phonenumber: "(803) 734-2265",
    labelCSS: "bg-palette3-5",
    address: "Room 417, Bowers Conference Room, Rembert Dennis Building"
  },
  {
    name: "Board of Economic Advisors Meeting",
    month: "Nov",
    day: "25",
    label: "Updated",
    time: "1:30PM",
    phonenumber: "(803) 734-2265",
    labelCSS: null,
    address: "Room 417, Bowers Conference Room, Rembert Dennis Building"
  },
  {
    name: "Board of Economic Advisors Meeting",
    month: "Nov",
    day: "28",
    label: "Updated",
    time: "1:30PM",
    phonenumber: "(803) 734-2265",
    labelCSS: null,
    address: "Room 417, Bowers Conference Room, Rembert Dennis Building"
  }
];

function makeSecondSectionCard(index: any, title: string, link: string) {
  let height = 141;

  return <Card className="text-center" sx={{ width: 250, height: 250 }}>
    <CardContent>
      <Image alt={`${title} image`} height={height} width={height} src={link} />
      <br></br>
      <a href="#" className="font-weight-bold font-family-open-sans text-palette1-2 text-uppercase">
        {title}
      </a>
    </CardContent>
  </Card>;
}


const Home: React.FC = () => {
  let firstSection = <>
    <div style={styles} className="row align-items-center">
      <div className="mx-auto">
        <div className="col-md-6 offset-md-3 col-xs-12 text-center" style={{ marginBottom: "2%" }}>
          <span className="h3 font-family-roboto-slab">
            Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services
          </span>
        </div>
        <div className="col-md-6 offset-md-3 col-xs-12 justify-content-center text-center" id="search-home-page-section">
          <TextField
            sx={{ borderRadius: 1 }}
            style={{
              minWidth: "70%",
              marginBottom: "3%"
            }}
            id="search-home-page"
            aria-label="Sitewide search" className="bg-white" variant="outlined" role="search" placeholder="Search rfa.sc.gov" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button sx={{ borderRadius: 0, padding: "14px 10px" }} className="align-middle btn-palette1-5" variant="contained" type="submit">
            <span className="font-weight-bold">
              <span>Search</span><Search></Search>
            </span>
          </Button>
        </div>
      </div>
    </div>
  </>;

  let secondSection =
    <div className="bg-palette4-7">
      <div className="row offset-md-2 col-md-8 pr-0 mr-0" style={{
        marginTop: "2%",
        marginBottom: "2%"
      }}>
        {
          sectionCards.map((item, index) => {
            return <div key={index} className="col d-flex justify-content-center col-md-3" style={{ marginBottom: "5px" }}>
              {makeSecondSectionCard(index, item[0], item[1])}
            </div>;
          })
        }
      </div>
    </div>;

  let thirdSection =
    <div className="bg-white">
      <div className="row col-md-8 offset-md-2" style={{
        marginTop: "2%",
      }}>
        <div className="row">
          <div className="col-md-12 header-style3" style={{ marginBottom: "1%" }}>
            Popular Services and Links
          </div>
          <div className="col-md-12" style={{ marginBottom: "1%" }}>
            {makeHorizontalRuler()}
          </div>
          {
            popularServicesAndLinks.map((item, index) => {
              return <div key={index} className="col-md-4" style={{ marginBottom: "2%" }}>
                <div className="col-12 col-md-10">
                  <a className="text-palette-link" href="#">
                    <u>{item}</u>
                  </a>
                </div>
              </div>;
            })
          }
        </div>

        {/* Recent Updates and Calendar of updates */}
        <div className="row">
          <div className="col-12 col-lg-6" style={{ marginBottom: "3%" }}>
            <div className="header-style3 text-capitalize">
              Recent Updates
            </div>
            {makeHorizontalRuler("3.5px", "10%", "bg-palette3-1", 3)}
            <div className="row">
              {
                recentUpdates.map(function (item, index) {
                  let result =
                    <div key={index} className="row col-12" style={{ marginBottom: "3%" }}>
                      <div className=" col-10">
                        <div className="col-12">
                          <a href={item?.link ?? "#"} className="text-palette-link">
                            <u>{item.name}</u>
                          </a>
                        </div>
                        <div className="col-12">
                          {<>
                            <span style={{
                              // lineHeight: "22pt"
                            }}>{item.loremIpsum ?? " "}</span>
                          </>}
                          <h6>
                            <small className="text-palette4-4">
                              <b>Published:</b> {item.published.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}
                              &nbsp;
                              <span style={badgeStyle} className="badge bg-palette4-3 text-white">{item?.label}</span>
                            </small>
                          </h6>
                        </div>
                      </div>
                    </div>;

                  return result;
                })
              }
              <div className="col-12">
                <Button sx={{
                  borderRadius: 0,
                  padding: "14px 10px",
                  minWidth: "129px"
                }} className="align-middle btn-palette1-5" variant="contained">
                  <span className="">
                    View More
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Calendar of updates */}
          <div className="col-12 col-lg-6 text-left" style={{ marginBottom: "3%" }}>
            <div className="header-style2">
              Calendar of Events
            </div>
            {makeHorizontalRuler("3.5px", "10%", "bg-palette3-1", 3)}
            <div className="row">
              {
                calendarOfEvents.map(function (item, index) {
                  let style = {
                    borderBottom: "1px solid #ccc",
                    fontWeight: "bold",
                  } as CSSProperties;

                  if ((index + 1) == calendarOfEvents.length)
                    style.borderBottom = "initial"

                  return <div key={index} className="col-12 d-flex" style={{ marginBottom: "3%" }}>
                    <div className="col-2 col-xs-3 text-white text-center px-xs-1 px-sm-1 px-md-1 px-lg-1 px-xl-4">
                      <div className="bg-palette3-1 py-2">
                        <h4 className="pb-0 mb-0 mt-2" style={{
                          fontSize: "15px"
                        }}>
                          {item.month}
                        </h4>
                        <h4 className="pt-0 mt-0">{item.day}</h4>
                      </div>
                    </div>
                    <div className="col-9 col-xs-7">
                      {
                        item.labelCSS && <h6>
                          <span style={badgeStyle} className={"badge text-white " + item.labelCSS}>
                            {item.label}
                          </span>
                        </h6>
                      }
                      <h6 className=""><b>{item.name}</b></h6>
                      <h6 className=""><LocationOn className="float-left text-palette3-1" /> <div className="col-12">{item.address}</div></h6>
                      <h6 className=""><AccessTime className="float-left text-palette3-1" /> <div className="col-12">{item.time}</div></h6>
                      <h6 className="pb-4" style={style}>
                        <ContactPageOutlined className="float-left text-palette3-1" /> <div className="col-12">{item.phonenumber}</div>
                      </h6>
                    </div>
                  </div>;
                })
              }
              <div className="col-12">
                <Button sx={{
                  borderRadius: 0,
                  padding: "14px 10px",
                  minWidth: "169px"
                }} className="align-middle btn-palette1-5" variant="contained">
                  <span className="">
                    View All Events
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 text-right" style={{ marginBottom: "2%" }}>
          <a aria-label="Back to Top" href="#" style={{
            textDecoration: "none"
          }}>
            Back to Top <KeyboardArrowUp className="text-palette1-5 bg-palette-up-arrow-bg rounded-circle" style={{
              width: "40px",
              height: "40px"
            }} />
          </a>
        </div>
      </div>
    </div>;

  return (
    <>
      <NextSeo
        title="Home - South Carolina Revenue and Fiscal Affairs Office"
        description="The official website of the South Carolina Revenue and Fiscal Affairs Office. Transforming data into solutions for South Carolina."
      />
      <div className="d-flex flex-column min-vh-100" style={{
        // hack to prevent background-image overflow on x axis
        overflowX: "hidden"
      }}>
        <header>
          <Header />
        </header>

        <main aria-disabled="true">
          {firstSection}

          {secondSection}

          {thirdSection}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;