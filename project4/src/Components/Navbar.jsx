import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/?search=${query}`);
  };

  return (
    <nav className="nav">
      <h2>CineTrack</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}/>
      </form>
    </nav>
  );
}

export default Navbar;
