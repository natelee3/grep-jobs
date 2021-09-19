import { differenceInCalendarWeeks, differenceInCalendarMonths, differenceInDays, differenceInHours } from 'date-fns';

const DateFunction = ({date_posted}) => {
    const today = new Date();
    const then = new Date(date_posted);
    const daysBetween = Math.abs(differenceInDays(then, today));
    const hoursBetween = Math.abs(differenceInHours(then,today));
    const weeksBetween = Math.abs(differenceInCalendarWeeks(then,today));
    const monthsBetween = Math.abs(differenceInCalendarMonths(then, today));
    
    return (
        <>
            {parseInt(hoursBetween) < 24 ? (
                <span>Posted {hoursBetween} hours ago</span>
            ) : daysBetween === 1 ? (
                <span>Posted 1 day ago</span>
            ) : daysBetween > 1 && daysBetween < 56 ? (
                <span>Posted {weeksBetween} weeks ago</span>
            ) : daysBetween > 60 ? (
                <span>Posted {monthsBetween} months ago</span>
            ) : (
                <span>Posted {daysBetween} days ago</span>
            )}
        </>
    )
}

export default DateFunction;