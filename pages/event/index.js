import {useRouter} from 'next/router';
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEventPage(){
    const events = getAllEvents();
    const router = useRouter();

    function findEvent(year, month){
        const fullPath = `/event/${year}/${month}`;
        router.push(fullPath);
    }
    return(
        <div>
            <EventSearch onSearch={findEvent}/>
            <EventList items={events} />
        </div>
    )
}

export default AllEventPage;