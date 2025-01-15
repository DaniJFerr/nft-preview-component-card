export interface NFTCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  timeLeft: string;
  creator: {
    avatarUrl: string;
    name: string;
  };
}

export interface IconWithTextProps {
  iconSrc: string;
  text: string;
  className?: string;
}
