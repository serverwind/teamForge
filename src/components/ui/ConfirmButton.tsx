interface ConfirmButtonProps {
  text: string;
}

export const ConfirmButton = ({ text }: ConfirmButtonProps) => {
  return <button type="submit" className="bg-red text-white px-4 py-2 rounded hover:bg-lightRed transition duration-300">{text}</button>;
};
