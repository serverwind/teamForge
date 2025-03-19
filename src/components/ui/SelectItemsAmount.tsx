import { Formik, Field } from "formik";
import { setItemsPerPage } from "../../store/teamsReducer";
import { useDispatch } from "react-redux";

export const SelectItemsAmount = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handlePageChange = () => {
    setCurrentPage(1);
  };

  return (
    <Formik
      initialValues={{ select: "6" }}
      onSubmit={(values) => {
        dispatch(setItemsPerPage(Number(values.select)));
        handlePageChange();
      }}
    >
      {(formik) => (
        <form onChange={formik.handleSubmit}>
          <Field as="select" name="select" className="bg-white rounded px-4 py-2 border border-lightestGrey text-grey">
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </Field>
        </form>
      )}
    </Formik>
  );
};
