import axios from "axios";
import { saveDataToLocalStorage } from "../halpers/localStorage";

interface SignInData {
    userName: string;
    password: string;
}

export function signIn(data: SignInData) {
    const url = import.meta.env.VITE_BACKEND_LINK;

    return axios.post(url + "api/users/login", data).then((res) => {
        saveDataToLocalStorage(res.data.token);
    });
}

export async function getAllDrivers(token: string) {
    const url = import.meta.env.VITE_BACKEND_LINK;

    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    let driversCount = 1;
    await axios(`${url}api/v1/drivers/logs/1/${driversCount}`, config).then(
        (res) => {
            driversCount = res.data.totalItemCount;
        }
    );

    return axios(`${url}api/v1/drivers/logs/1/${driversCount}`, config).then(
        (res) => {
            return res.data;
        }
    );
}
