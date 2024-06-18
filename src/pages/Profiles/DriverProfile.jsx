import { useParams, Link } from "react-router-dom";

function DriverProfile() {
  const { id } = useParams();
  return (
    <div>
      <h2>DriverProfile {id}</h2>
      <Link to="/p/t/aston_martin">Profile Aston Martin</Link>
    </div>
  );
}

export default DriverProfile;
