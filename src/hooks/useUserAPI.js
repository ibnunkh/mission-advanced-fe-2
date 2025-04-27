
const API_URL = "http://localhost:3001/users";

export const useUserAPI = () => {
    const addUser = async (newUser) => {
        const res = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        return res.json();
    };

    const getUsers = async () => {
        const res = await fetch("http://localhost:3001/users");
        const data = await res.json();
        return data;
    };

    return { addUser, getUsers };
}