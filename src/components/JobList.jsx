import {JobPosition} from './JobPosition';
import {useDispatch, useSelector} from "react-redux";
import {selectVisiblePositions} from "../redux/positions/position-selector";
import {addFilter} from "../redux/filters/filter-action";
import {selectFilters} from "../redux/filters/filter-selector";

const JobList = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector(selectFilters)
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilter));

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    }
    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    {...item}
                    handleAddFilter={handleAddFilter}
                />
            ))}
        </div>
    )
}

export {JobList};