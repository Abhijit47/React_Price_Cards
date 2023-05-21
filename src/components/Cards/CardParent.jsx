import React from 'react';
import Card from './Card';

const CardParent = () => {
  const cardInfo = [
    {
      id: 1,
      header: "Free",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      public_Project: "Unlimited Public Projects",
      community_access: "Community Access",
      private_Project: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status_Report: "Monthly Status Reports"
    },
    {
      id: 2,
      header: "Plus",
      price: "$9",
      user: "5 User",
      storage: "50GB Storage",
      public_Project: "Unlimited Public Projects",
      community_access: "Community Access",
      private_Project: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status_Report: "Monthly Status Reports"
    },
    {
      id: 3,
      header: "Pro",
      price: "$49",
      user: "Unlimited Users",
      storage: "150 GB Storage",
      public_Project: "Unlimited Public Projects",
      community_access: "Community Access",
      private_Project: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomains",
      status_Report: "Monthly Status Reports"
    }
  ];


  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {cardInfo.map((info, i) => {
              console.log(info);
              return (
                <Card info={info} key={i} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardParent;