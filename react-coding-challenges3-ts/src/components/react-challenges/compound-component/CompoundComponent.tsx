import Button from "./Button";
import Card from "./Card";
import CompoundCard from "./CompoundCard";
import Image from "./Image";
import Text from "./Text";

function CompoundComponent() {
  return (
    <>
      <Card>
        <Image imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lkz8176yxN2Fn2jnL2GqPkQ5omSa2nl6yA&usqp=CAU" />
        <Text />
        <Button />
        {/* <h2>HI</h2> */}
      </Card>

      <span>===============</span>

      <CompoundCard>
        <CompoundCard.Image imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lkz8176yxN2Fn2jnL2GqPkQ5omSa2nl6yA&usqp=CAU" />
        <CompoundCard.Text />
        <CompoundCard.Button />
      </CompoundCard>
    </>
  );
}

export default CompoundComponent;
