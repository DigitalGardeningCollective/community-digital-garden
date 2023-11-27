
export const useLocalStorage = () => {

    const addToLocalStorage = <T>(key: string, value: T | null) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const retrieveFromLocalStorage = <T>(key: string): T | null => {
        const value = localStorage.getItem(key);

        return value ? JSON.parse(value) : null;
    }

    const removeFromLocalStorage = (key: string) => {
        localStorage.removeItem(key);
    }

    return { 
        addToLocalStorage,
        retrieveFromLocalStorage,
        removeFromLocalStorage
    };
}