import { useFetch } from "../hooks/useFetch";

function Iss() {
  const url = "https://api.wheretheiss.at/v1/satellites/25544";
  const { data } = useFetch(url);

  return (
    <>
      {data && (
        <div className="iss-container">
          <h2>The ISS location:</h2>
          <p>Latitude: {data.latitude}</p>
          <p>Longitude: {data.longitude}</p>
          <p>Altitude: {data.altitude}</p>
          <p>Velocity: {data.velocity}</p>
        </div>
      )}
    </>
  );
}

export default Iss;
