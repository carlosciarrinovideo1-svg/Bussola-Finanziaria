function Header() {
  return (
    <header
      style={{
        marginBottom: "30px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          color: "#0f172a",
          fontSize: "2rem",
        }}
      >
        🧭 Bussola Finanziaria
      </h1>

      <p
        style={{
          marginTop: "8px",
          color: "#64748b",
        }}
      >
        Versione 0.2.0
      </p>
    </header>
  );
}

export default Header;