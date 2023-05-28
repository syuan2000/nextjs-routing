import classes from './Event.module.css';
import Button from '../ui/Button';
import { MdOutlineDateRange, MdOutlineLocationOn, MdOutlineArrowForward } from 'react-icons/md'

function EventItem(props){

    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day:'numeric',
        month:'long',
        year: 'numeric'
    });
    const formatLocation = location.replace(', ', '\n');
    const exploreLink = `/event/${id}`
    return(
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>
                        {title}
                    </h2>
                    <div className={classes.date}>
                        <MdOutlineDateRange />
                        <time>
                            {humanReadableDate}
                        </time>
                    </div>
                    <div className={classes.address}>
                        <MdOutlineLocationOn />
                        <address>{formatLocation}</address>
                    </div>
                    <div className={classes.actions}>
                        <Button link={exploreLink}>Explore Event <span><MdOutlineArrowForward /></span></Button>
                        
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventItem;