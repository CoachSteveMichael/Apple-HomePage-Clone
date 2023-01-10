import React from "react";

let shopLearn = "Store, Mac,iPad,iPhone,Watch,AirPods,TV & Home,AirTag,Accessories,Gift Cards".split(
  ","
);
let services = "Apple Music,Apple TV+,Apple Fitness+,Apple News+,Apple Arcade,iCloud,Apple One,Apple Card,Apple Books,Apple Podcasts,App Store".split(
  ","
);
let account = "Manage Your Apple ID,Apple Store Account,iCloud.com".split(",");
let appleStore = "Apple TV+,Apple Fitness+,Apple News+,Apple Arcade,iCloud,Apple One,Apple Card,Apple Books,Apple Podcasts,App Store,Account,Manage Your Apple ID,Apple Store Account,iCloud.com,Apple Store,Find a Store,Genius Bar,Today at Apple,Apple Camp,Apple Store App,Refurbished and Clearance,Financing,Apple Trade In,Order Status,Shopping Help".split(
  ","
);
let forBusiness = "Apple and Business, Shop for Business".split(",");
let education = "Apple and Education,Shop for K-12,Shop for College".split(",");
let healthcare = "Apple in Healthcare,Health on Apple Watch,Health Records on iPhone".split(
  ","
);
let government = "Shop for Government,Shop for Veterans and Military".split(
  ","
);
let appleValues = "Accessibility,Education,Environment,Inclusion and Diversity,Privacy,Racial Equity and Justice,Supplier Responsibility".split(
  ","
);
let about = "Newsroom,Apple Leadership,Career Opportunities,Investors,Ethics & Compliance,Events,Contact Apple".split(
  ","
);

let menuItems = [
  ...shopLearn,
  ...services,
  ...account,
  ...appleStore,
  ...forBusiness,
  ...education,
  ...healthcare,
  ...government,
  ...appleValues,
  ...about
];

console.log(menuItems);

let menuElements = menuItems.map((ele, index) => <p key={index}>{ele}</p>);

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-link-wrapper">
        <div className="flex">
          <h4>Shop & Learn</h4>
          {menuElements.slice(0, shopLearn.length)}
        </div>
        <div className="flex">
          <h4>Services</h4>
          {menuElements.slice(
            shopLearn.length,
            shopLearn.length + services.length
          )}
          <h4>Account</h4>
          {menuElements.slice(
            menuItems.indexOf("Manage Your Apple ID"),
            menuItems.indexOf("iCloud.com") + 1
          )}
        </div>
        <div className="flex">
          <h4>Find a Store</h4>
          {menuElements.slice(
            menuItems.indexOf("Find a Store"),
            menuItems.indexOf("Shopping Help") + 1
          )}
        </div>

        <div className="flex">
          <h4>For Business</h4>
          {menuElements.slice(
            menuItems.indexOf("Apple and Business"),
            menuItems.indexOf("Apple and Education")
          )}
          <h4>For Education</h4>
          {menuElements.slice(
            menuItems.indexOf("Apple and Education"),
            menuItems.indexOf("Apple in Healthcare")
          )}
          <h4>For Healthcare</h4>
          {menuElements.slice(
            menuItems.indexOf("Apple in Healthcare"),
            menuItems.indexOf("Accessibility")
          )}
        </div>
        <div className="flex">
          <h4>Apple Values</h4>
          {menuElements.slice(
            menuItems.indexOf("Accessibility"),
            menuItems.indexOf("Supplier Responsibility")
          )}
          <h4>About Apple</h4>
          {menuElements.slice(
            menuItems.indexOf("Newsroom"),
            menuItems.indexOf("Contact Apple") + 1
          )}
        </div>
      </div>
      <div className="footer-text">
        <p className="disclaimer">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE.
        </p>
        <div className="legal-links">
          <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
          <div className="middle-legal-links">
            <a className="legal" href="">
              Privacy Policy
            </a>
            <a className="legal" href="">
              Terms of Use
            </a>
            <a className="legal" href="">
              Sales and Refunds
            </a>
            <a className="legal" href="">
              Legal
            </a>
            <a href="">Site Map</a>
          </div>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
