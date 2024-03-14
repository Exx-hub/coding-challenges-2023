import Button from "./Button";
import Image from "./Image";
import Text from "./Text";

type CompoundCardProps = {
  children: React.ReactNode;
};

function CompoundCard({ children }: CompoundCardProps) {
  return <div className="w-28 border border-gray-500">{children}</div>;
}

// all imports are here.
CompoundCard.Image = Image;
CompoundCard.Text = Text;
CompoundCard.Button = Button;

export default CompoundCard;
