export function saveDataToLocalStorage(token: string) {
    const dataToLoLocalStorage = {
        date: new Date().toDateString(),
        token,
    };

    localStorage.setItem(
        "aitimAdminToken",
        JSON.stringify(dataToLoLocalStorage)
    );
}
