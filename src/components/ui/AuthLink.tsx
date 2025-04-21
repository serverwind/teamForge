import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  question: string;
  link: string;
}

export const AuthLink = ({ text, question, link }: AuthLinkProps) => {
  return (
    <div className="text-center">
      <span className="text-grey text-sm">{question}</span>
      <Link className="text-red text-sm underline ml-1" to={link}>{text}</Link>
    </div>
  );
};
