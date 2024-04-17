import PropTypes from "prop-types";

const CardPub = ({ details }) => {
  // Assuming the `details.data` object contains all the necessary publication information
  // and `details.data.doi` is the full URL to the publication
  return (
    <a
      href={details.data.doi}
      className={`${details.data.bgColor} dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-dark-border dark:border-2 block`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-tiny text-text-primary dark:text-dark-text">
        {details.data.year}
      </span>
      <h3 className="text-xl dark:text-white">{details.data.title}</h3>
      <p className="dark:text-dark-text">{details.data.authors.join(", ")}</p> {/* Assuming authors is an array */}
      <p className="dark:text-dark-text">{details.data.journal}</p>
      <span className="text-tiny text-text-secondary dark:text-dark-text">
        {details.data.doi}
      </span>
    </a>
  );
};

CardPub.propTypes = {
  details: PropTypes.shape({
    data: PropTypes.shape({
      bgColor: PropTypes.string,
      year: PropTypes.string,
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      journal: PropTypes.string,
      doi: PropTypes.string,
    }),
  }),
};

export default CardPub;
