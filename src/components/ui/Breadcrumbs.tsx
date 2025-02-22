import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  link: string;
  text: string;
  current: string;
}

export const Breadcrumbs = ({ link, text, current }: BreadcrumbsProps) => {
  return (
    <div className="py-6 px-10">
      <Link to={link} className="text-sm text-darkRed">
        {text}
      </Link>
      <span className="text-sm text-lightGray mx-1">/</span>
      <span className="text-sm text-darkRed">{current}</span>
    </div>
  );
};
