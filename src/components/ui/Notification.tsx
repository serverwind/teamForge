export const Notification = ({ text, result }) => {
  return (
<div className={`absolute top-0 sm:top-4 sm:right-4 bg-lightRed px-4 py-2 text-white sm:rounded transition-all duration-300 ease-in-out ${result ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>{ text }</div>
  )
}
