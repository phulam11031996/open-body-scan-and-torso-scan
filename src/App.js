import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("message", (ev) => {
      // Do something with your image data
      console.log(ev.data);
    });
  }, []);
  const handleShowTorsoScan = (e) => {
    e.preventDefault();
    const modal = document.getElementById("torso-scan-modal-k28vew83vj");
    modal.style.display = "block";
  };

  const handleShowBodyScan = (e) => {
    e.preventDefault();
    const modal = document.getElementById("body-scan-modal-k28vew83vj");
    modal.style.display = "block";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100swh",
        height: "100svh",
        gap: "10px",
      }}
    >
      <button
        className="btn"
        style={{
          backgroundColor: "#00B7F4",
          color: "white",
          padding: "1rem",
          border: 0,
          fontSize: "1rem",
          borderRadius: "30px",
          cursor: "pointer",
        }}
        onClick={(e) => handleShowTorsoScan(e)}
      >
        Start a Torso Scan
      </button>
      <button
        className="btn"
        style={{
          backgroundColor: "#00B7F4",
          color: "white",
          padding: "1rem",
          border: 0,
          fontSize: "1rem",
          borderRadius: "30px",
          cursor: "pointer",
        }}
        onClick={(e) => handleShowBodyScan(e)}
      >
        Start a Body Scan
      </button>
    </div>
  );
}

export default App;
