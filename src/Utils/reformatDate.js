const reformatDate = (dateStr) => {
  const fecha = dateStr.split(" ");
  const dArr = fecha[0].split("-");
  return (
    dArr[2] +
    "/" +
    dArr[1] +
    "/" +
    dArr[0].substring(2) +
    " " +
    (fecha[1] || "")
  );
};
export default reformatDate;
