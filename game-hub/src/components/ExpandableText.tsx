import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (children || children.length <= limit) return <Text>children</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        fontWeight="bold"
        colorScheme="yellow"
        ms={1}
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {" "}
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );

  return <div></div>;
};

export default ExpandableText;
