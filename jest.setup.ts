import "@testing-library/jest-dom/extend-expect";
import React from "react";

jest.mock(
  "next/image",
  () =>
    function MockedImage(props: any) {
      const { src, alt, ...rest } = props;
      return React.createElement("img", { src, alt, ...rest });
    }
);

