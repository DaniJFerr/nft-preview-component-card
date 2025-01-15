import { render, screen } from "@testing-library/react";
import { IconWithText } from "./IconWithText";

describe("IconWithText", () => {
  it("renders icon and text correctly", () => {
    const props = {
      iconSrc: "test-icon.png",
      text: "Test Text",
      className: "test-class",
    };

    render(<IconWithText {...props} />);

    expect(screen.getByText(props.text)).toBeInTheDocument();
    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", props.iconSrc);
  });
});
