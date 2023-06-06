import useAuth from "../../hooks/useAuth";

const UsersHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className="text-4xl ml-6">welcome back {user?.displayName}</h1>
        </div>
    );
};

export default UsersHome;