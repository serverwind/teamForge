import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { searchTeams } from "../../store/teamsReducer";
import * as Yup from "yup";
import search from "../../assets/search.svg";

export const Search = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => {
        dispatch(searchTeams(values.search));
      }}
      validationSchema={Yup.object({
        search: Yup.string().min(3, "At least 3 characters"),
      })}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="relative">
          <input placeholder="Search..." name="search" className="bg-white rounded px-4 py-2 w-full" onChange={formik.handleChange} value={formik.values.search} />
          <button type="submit" className="absolute right-3 top-3">
            <img src={search} alt="search" />
          </button>
        </form>
      )}
    </Formik>
  );
};
