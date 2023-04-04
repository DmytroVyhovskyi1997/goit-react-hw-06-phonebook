import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';

export const ContactFilter = ({ filter, onChange }) => (
  <div >
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input
      className={css.formInput}
      type="text"
      placeholder="Enter filter"
      name="filter"
      onChange={onChange}
      value={filter}
    />
  </div>
);
ContactFilter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
