interface CancelButtonProps {
  text: string;
}

export const CancelButton = ({ text }: CancelButtonProps) => {
  return <button type="button" className="bg-white text-lightGray border border-lightGray px-4 py-2 rounded hover:bg-lightGray hover:text-white transition duration-300">{text}</button>;
};
