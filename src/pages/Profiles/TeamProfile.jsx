import { useParams, Link } from "react-router-dom";

function TeamProfile() {
  const { id } = useParams();
  return (
    <div>
      <h2>TeamProfile {id}</h2>
      <Link to="/p/d/alonso">Profile Alonso</Link>
    </div>
  );
}

export default TeamProfile;
