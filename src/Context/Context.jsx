import { createContext, useEffect, useState, useContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Retrieve the stored user object
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }

        // Retrieve the stored user data array
        const storedUserData = JSON.parse(localStorage.getItem("userData") || "[]");
        setUserData(storedUserData);
    }, []);

    const handleLogin = (user) => {
        setUser(user);  // Store the full user object in state
        localStorage.setItem('user', JSON.stringify(user)); // Store the full user object in localStorage
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const addUser = (newUser) => {
        const updatedUserData = [...userData, newUser];
        setUserData(updatedUserData);
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
    };

    const handleDelete = (key) => {
        const updatedUserData = userData.filter(user => user.key !== key);
        setUserData(updatedUserData);
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
    }
    console.log(userData);

    return (
        <Context.Provider value={{ handleLogin, handleLogout, user, userData, addUser, handleDelete }}>
            {children}
        </Context.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(Context);
};

export { ContextProvider, useGlobalContext };
