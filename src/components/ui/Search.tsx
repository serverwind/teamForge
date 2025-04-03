import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import searchIcon from "../../assets/search.svg";

interface SearchProps {
  setCurrentPage: (page: number) => void;
}

export const Search = ({ setCurrentPage, search }: SearchProps) => {
  const dispatch = useDispatch();

  const handlePageChange = () => {
    setCurrentPage(1);
  };

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => {
        dispatch(search(values.search));
      }}
      validationSchema={Yup.object({
        search: Yup.string().min(2, "At least 2 characters"),
      })}
    >
      {(formik) => (
        <form onChange={formik.handleSubmit} className="relative">
          <input placeholder="Search..." name="search" className="bg-white rounded px-4 py-2 w-full" onChange={formik.handleChange} value={formik.values.search} />
            <img src={searchIcon} alt="search" className="absolute right-3 top-3"/>
        </form>
      )}
    </Formik>
  );
};
