import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import { Fragment } from "react";
import ErrorAlert from "../../../components/ui/error-alert";
import EventContent from "../../../components/event-detail/event-content";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";

function EventDetailPage(){
    const router = useRouter();
    const eventId = router.query.id;
    const event = getEventById(eventId);
    if(!event){
        return(
        <Fragment>
            <ErrorAlert>
                <p>No events found for the ID.</p>
            </ErrorAlert>
            <div className='center'>
                    <Button link='/event'>Show All Events</Button>
            </div>
        </Fragment>
        )
    }

    return(
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent>
                {event.description}
            </EventContent>
        </Fragment>
    )
}

export default EventDetailPage;