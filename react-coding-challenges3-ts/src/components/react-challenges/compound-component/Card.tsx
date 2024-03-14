type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="w-28 border border-gray-500">{children}</div>;
}

export default Card;
