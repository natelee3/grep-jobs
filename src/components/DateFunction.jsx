import { differenceInDays } from 'date-fns';

const DateFunction = (props) => {
    const today = new Date();
    const then = new Date(props.formatDate);
    const daysBetween = differenceInDays(then, today);
    
    return (
        <>
            {parseInt(daysBetween) < 1 ? (
                <p>Posted less than a day ago</p>
            ) : (
                <p>Posted {daysBetween} days ago</p>
            )}
        </>
    )
}

export default DateFunction;