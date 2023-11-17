import "./end.css";

const EndPayment = () => {
  const handleSeguirComprando = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div id="finalizar">
        <h1>Finalizo el pago</h1>
        <button
          className="btn cart px-auto fin"
          onClick={handleSeguirComprando}
        >
          Volver a comprar
        </button>
      </div>
    </>
  );
};

export default EndPayment;
