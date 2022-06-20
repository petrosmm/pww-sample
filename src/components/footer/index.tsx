import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {

  let myBottomLinks = Array.from(new Map<string, string>([
    ["Privacy Statement", "#"],
    ["FOIA", "#"],
    ["Disclosures and Reporting", "#"],
    ["Report Fraud", "#"],
    ["Accessibility", "#"],
    ["Contact Us", "#"],
  ]));

  let piece = <div className="bg-palette1-2 text-white">
    <div className="row col-xl-10 offset-xl-1" style={{
      paddingTop: "22px",
      paddingBottom: "22px"
    }}>
      <div className="col-md-4 col-xs-12">
        <p className="h5 font-weight-bold">
          South Carolina<br></br>Revenue and Fiscal Affairs Office
        </p>
        <Image alt="Bottom Logo image" width={147} height={147} src="/assets/rfa_logo_bottom.png"></Image>
      </div>
      <div className="col-md-4 col-xs-12">
        <ul className="" style={{
          listStyleType: "none",
          color: "white",
          padding: "0px"
        }}>
          {
            myBottomLinks.map((item, index) => {
              return <li key={index} style={{
                marginBottom: "2%"
              }}>
                <a href={item[1]} style={{
                  color: "white"
                }}>
                  {item[0]}
                </a>
              </li>;
            })
          }
        </ul>
      </div>
      <div className="col-md-4 col-xs-12">
        <span className="h6 font-weight-bold text-uppercase text-palette1-6">LOCATION</span>
        <div>1000 Assembly St, Rembert Dennis Building, Suite 421<br></br>Columbia, SC 29201</div>
        <br></br>
        <span className="h6 font-weight-bold text-uppercase text-palette1-6">GEODETIC SURVERY section</span>
        <div>5 Geology Rd<br></br>Columbia, SC 29212</div>
        <br></br>
        <span className="h6 font-weight-bold text-uppercase text-palette1-6">Health and demographics division</span>
        <div>1000 Assembly St, Rembert Dennis Building, Suite 240<br></br>Columbia, SC 29201</div>
      </div>
    </div>
  </div>;

  return piece;
};