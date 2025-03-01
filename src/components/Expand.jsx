function Expand() {
  return (
    <div
      style={{
        width: "3.4rem",
        height: "3.4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#20202a67",
        padding: "8px",
        borderRadius: "50%",
        transform: "scale(0.8)",
        cursor: "pointer",
        transition: "all var(--transition)",
      }}
      className="expand"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ fill: " #e3e3e3" }}
      >
        <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
      </svg>
    </div>
  );
}

export default Expand;
