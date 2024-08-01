import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export const SearchBox = () => {
    const dispatch = useDispatch();
    
    const nameFilter = useSelector(selectNameFilter);
   
    const handleFilterChange = (evt) => {
        dispatch(changeFilter(evt.target.value));
    };
    return (
        <div>
            <p className={css.find}>Find contact by name</p>
            <input className={css.input} type="text" value={nameFilter} onChange={handleFilterChange}/>
        </div>
    )
}