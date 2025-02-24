import placeholder from "../../assets/add_photo.svg"

export const AttachImg = () => {
  return (
    <div className="content-base">
      <div className="rounded-md bg-lightGray bg-opacity-50 p-24 flex items-center justify-center">
      <img className="w-20 h-20" src={placeholder} alt="Attach" />
      </div>
      </div>
  )
}
