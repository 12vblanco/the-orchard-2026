import { render, screen } from "@testing-library/react";
import type { NavItems } from "../../data/navigation";
import Navigation from "./Navigation";

const fakeNavItems: NavItems = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/#menu" },
  { label: "Contact", path: "/#contact" },
];

describe("Navigation", () => {
  it("renders all nav links", () => {
    // 1. SETUP — mount the component into the test DOM with the fake data
    render(<Navigation navLinks={fakeNavItems} />);

    // 2. ASSERT — each link should be findable by its visible text.
    //    getByRole throws if the element isn't found, so the test fails
    //    immediately if any link is missing.
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Menu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });
});
