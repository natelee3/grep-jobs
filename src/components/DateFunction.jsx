import { differenceInDays } from 'date-fns';

const DateFunction = (props) => {
    const today = new Date();
    const then = new Date(props.formatDate);
    const daysBetween = differenceInDays(then, today);
    
    return (
        <>
            {parseInt(daysBetween) < 1 ? (
                <span>Posted less than a day ago</span>
            ) : (
                <span>Posted {daysBetween} days ago</span>
            )}
        </>
    )
}

export default DateFunction;