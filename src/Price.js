import "./Price.css";
import Card from "./Card.js";

function Price() {
  const details = [
    {
      title: "Free",
      price: "$0",
      userType: "Single User",
      storage: "5GB Storage",
      project: "Unlimited Public Projects",
      support: "Dedicated Phone Support",
      access: "Community Access",
      plan: "Unlimited Private Projects",
      domain: "Free Subdomain",
      reports: "Monthly Status Rports",
    },
    {
      title: "Plus",
      price: "$5",
      userType: "Single User",
      storage: "50GB Storage",
      project: "Unlimited Public Projects",
      support: "Dedicated Phone Support",
      access: "Community Access",
      plan: "Unlimited Private Projects",
      domain: "Free Subdomain",
      reports: "Monthly Status Rports",
    },
    {
      title: "Pro",
      price: "$60",
      userType: "Single User",
      storage: "15G0B Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      support: "Dedicated Phone Support",
      plan: "Unlimited Private Projects",
      domain: "Free Subdomain",
      reports: "Monthly Status Rports",
    },
  ];

  return (
    <section className="pricing">
      <div className="row">
        {details.map((data) => {
          return <Card key={data.title} res={data} />;
        })}{" "}
      </div>
    </section>
  );
}

export default Price;
