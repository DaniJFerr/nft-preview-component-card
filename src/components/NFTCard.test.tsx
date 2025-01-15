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
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5222ec6a2262b9f480baa932b2f8c3bc02f3b25fc3785f9a70804d8ecd5178a6?placeholderIfAbsent=true&apiKey=19bec41ad166455e97401c139e8bd291",
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
