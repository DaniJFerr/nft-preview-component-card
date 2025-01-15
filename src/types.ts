interface Creator {
  name?: string;
  avatarUrl?: string;
}

export interface NFTCardProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  price?: string;
  timeLeft?: string;
  creator?: Creator;
} 