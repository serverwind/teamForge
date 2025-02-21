interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <button className="bg-red text-white px-4 py-2 rounded hover:bg-lightRed transition duration-300">{text}</button>;
};
