import notFoundImg from "../../assets/not-found.svg"

export const NotFound = () => {
  return (
    <div className="sm:px-4 py-12 my-20 sm:max-w-lg bg-white mx-auto rounded">
      <img className="mx-auto rounded" src={notFoundImg} alt="Not Found" />
      <h2 className="text-center font-bold text-3xl text-lightRed mb-4">Empty here</h2>
      <p className="text-center text-grey">No teams found</p>
    </div>
  )
}
