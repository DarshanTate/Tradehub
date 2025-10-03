import React from "react";

function CreateTicket() {
  // Define the new content structure
  const ticketTopics = [
    {
      title: "Account Opening",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      links: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      title: "Console",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {/* Map through the topics to create columns dynamically */}
        {ticketTopics.map((topic, index) => (
          // Use col-md-4 to get 3 columns on medium/large screens (4 * 3 = 12 total grid columns)
          <div key={index} className="col-md-4 p-5 mt-2 mb-2">
            <h4 className="">
              {/* Note: Assuming 'fa-plus-circle' is available via a linked FontAwesome CDN/library */}
              <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
              {topic.title}
            </h4>
            {/* Map through the links for the current topic */}
            {topic.links.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                <a
                  href="#" // Placeholder for the actual link URL
                  style={{ textDecoration: "none", lineHeight: "2.5" }}
                >
                  {link}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;