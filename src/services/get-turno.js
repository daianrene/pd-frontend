const getTurno = () => {
  const date = new Date();
  const hora = date.getHours();
  let turno;

  if (hora < 6) turno = "T1";
  else if (hora < 12) turno = "T2";
  else if (hora < 18) turno = "T3";
  else turno = "T4";

  return turno;
};

export default getTurno;
