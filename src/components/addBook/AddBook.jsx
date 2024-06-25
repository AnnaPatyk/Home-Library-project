import React from "react";
import FormAddBook from "./FormAddBook";

function AddBook() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#0D0D0D" }}>
      <FormAddBook></FormAddBook>
    </div>
  );
}
export default React.memo(AddBook);
