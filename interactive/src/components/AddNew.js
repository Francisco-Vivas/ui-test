import { Link } from "react-router-dom";

const AddNew = () => {
  return (
    <section className="d-flex justify-content-between pl-4 pr-4 pt-3 pb-3 mt-4 mb-5 section__addNew">
      <span>Is there anyone else you would want us to add?</span>
      <Link to="/#">Submit a Name</Link>
    </section>
  );
};

export default AddNew;
