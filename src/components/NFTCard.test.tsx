import { render, screen } from "@testing-library/react";
import { NFTCard } from "../NFTCard";

const mockProps = {
  imageUrl:"image-equilibrium.jpg",
  title: "Equilibrium #3429",
  description: "Our Equilibrium collection promotes balance and calm.",
  price: "0.041 ETH",
  timeLeft: "3 days left",
  creator: {
    avatarUrl:
      "image-avatar.png",
    name: "Jules Wyvern",
  },
};

describe("NFTCard", () => {
  it("renders all content correctly", () => {
    render(<NFTCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.price)).toBeInTheDocument();
    expect(screen.getByText(mockProps.timeLeft)).toBeInTheDocument();
    expect(screen.getByText(mockProps.creator.name)).toBeInTheDocument();
  });

  it("renders all images with correct alt text", () => {
    render(<NFTCard {...mockProps} />);

    expect(screen.getByAltText(mockProps.title)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${mockProps.creator.name}'s avatar`)
    ).toBeInTheDocument();
  });
});
