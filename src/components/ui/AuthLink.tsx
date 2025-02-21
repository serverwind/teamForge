interface AuthLinkProps {
  text: string;
  question: string;
  link: string;
}

export const AuthLink = ({ text, question, link }: AuthLinkProps) => {
  return (
    <div className="text-center">
      <span className="text-grey text-sm">{question}</span>
      <a className="text-red text-sm underline ml-1" href={link}>{text}</a>
    </div>
  );
};
