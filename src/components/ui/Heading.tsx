interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps) => {
  return <h1 className="text-darkGrey text-center sm:text-left text-4xl mb-2">{text}</h1>;
};
