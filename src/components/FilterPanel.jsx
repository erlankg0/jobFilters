import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {useDispatch, useSelector} from "react-redux";
import {selectFilters} from "../redux/filters/filter-selector";
import {clearFilter, removeFilter} from "../redux/filters/filter-action";

const FilterPanel = () => {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch()

    if (filters.length > 0) {
        return (
            <Card className="filter-panel">
                <div className="filter-panel-wrapper">

                    <Stack>
                        {filters.map(filter => (<Badge onClick={() => dispatch(removeFilter(filter))}
                                                       variant="clearable">{filter}</Badge>))}
                    </Stack>

                    <button onClick={() => dispatch(clearFilter())} className='link'>Clear</button>
                </div>
            </Card>
        )
    } else {
        return <></>
    }
}

export {FilterPanel};