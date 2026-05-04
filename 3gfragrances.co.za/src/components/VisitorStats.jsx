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
        setLocation(`${data.city}, ${data.country_name}`);
      })
      .catch(() => setLocation("Unavailable"));
  }, []);

  return (
    <div className="visitor-stats">
      <h3>Website Stats</h3>
      <p>Visits: {visits}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default VisitorStats;