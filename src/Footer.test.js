import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

  it("renders without crashing", function () {
    render(<Footer />);
  });

  // it("shows footer test", function () {
  //   let result = render(<Footer />);
  //   expect(result.queryByText("copyright")).toBeInTheDocument();
  // });