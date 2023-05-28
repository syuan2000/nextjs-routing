import {useRouter} from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button'
import { Fragment } from 'react';
import ErrorAlert from '../../components/ui/error-alert';

function FilterEventPage(){
    const router = useRouter();

    const filterData = router.query.slug;
    if (!filterData){
        return <p className='center'>Loading</p>
    }
    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    if(isNaN(filterYear)||isNaN(filterMonth)||filterYear > 2023 || filterYear <2021 || filterMonth<1 || filterMonth > 12)  {
        return(
        <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your value.</p>
            </ErrorAlert>
            <div className='center'>
                    <Button link='/event'>Show All Events</Button>
            </div>
        </Fragment>) 
    }

    const filterEvents = getFilteredEvents({year: filterYear, month: filterMonth});
    if (!filterEvents || filterEvents.length===0){
        return (
        <Fragment>
            <ErrorAlert>
                <p>No events found for the chosed filter.</p>
            </ErrorAlert>
            <div className='center'>
                    <Button link='/event'>Show All Events</Button>
            </div>
        </Fragment>
        )
    }

    //the date object's month index start with 0
    const date = new Date(filterYear, filterMonth-1);


    return(
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filterEvents} />
        </Fragment>
    )
}

export default FilterEventPage;