import PropTypes from 'prop-types';
import css from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.formInput}
        type="text"
        placeholder="Enter filter"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};
ContactFilter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
