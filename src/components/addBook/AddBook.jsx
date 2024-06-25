import React from "react";
import FormAddBook from "./FormAddBook";

function AddBook() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#0D0D0D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormAddBook></FormAddBook>
    </div>
  );
}
export default React.memo(AddBook);
