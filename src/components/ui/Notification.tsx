import { Link } from "react-router-dom";

interface NotificationProps {
  text: string;
  isVisible: boolean;
  link?: string | null;
}

export const Notification = ({ text, isVisible, link = null }: NotificationProps) => {
  return <div className={`absolute top-0 sm:top-4 sm:right-4 bg-lightRed px-4 py-2 text-white sm:rounded transition-all duration-300 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>{link ? <Link className="underline" to={link}>{text}</Link> : text}</div>;
};
