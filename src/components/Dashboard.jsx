import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = (props) => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <>
            <h1>Dashboard</h1>
            {isAuthenticated && (
                <>
                    <p>Logged in successfully!</p>
                    <p>Username: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>
            )}
        </>
    )
};

export default Dashboard;