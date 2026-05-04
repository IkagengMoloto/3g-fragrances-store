import { useEffect, useState } from "react";

function VisitorStats() {
  const [visits, setVisits] = useState(0);
  const [location, setLocation] = useState("Unknown");

  useEffect(() => {
    const currentVisits = Number(localStorage.getItem("visitCount")) || 0;
    const updatedVisits = currentVisits + 1;

    localStorage.setItem("visitCount", updatedVisits);
    setVisits(updatedVisits);

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const visitorLocation = `${data.city || "Unknown"}, ${
          data.country_name || "Unknown"
        }`;

        setLocation(visitorLocation);

        localStorage.setItem("visitorLocation", visitorLocation);
        localStorage.setItem("lastVisit", new Date().toLocaleString());
      })
      .catch(() => {
        setLocation("Location unavailable");
      });
  }, []);

  return (
    <div className="visitor-stats">
      <h3>Website Stats</h3>
      <p>Visits from this browser: {visits}</p>
      <p>Visitor location: {location}</p>
    </div>
  );
}
import VisitorStats from "../components/VisitorStats";
export default VisitorStats;