import BaseUrl from "@/Providers/AxiosInstance";


export const getAllPatients = async (currentTab: string, currentPage:number) => {
    try {
        const res = await BaseUrl.get(`/patients?status=${currentTab}&page=${currentPage}`);
        return res.data;
    } catch (error) {
        throw new Error(`Something went wrong! ${error}`);
    }
};

export const createPriorAuth = async (data: unknown) => {
    try {
        console.log("INSIDE Create Auth", data)
        const res = await BaseUrl.post(`/authorizations`, data);
        console.log("INSIDE Create Auth", res)
        return res.data;
    } catch (error) {
        throw new Error(`Something went wrong! ${error}`);
    }
};

export const getAuthStatus = async () => {
    try {
        const res = await BaseUrl.get(`/authorizations/status`);
        return res.data.counts;
    } catch (error) {
        throw new Error(`Something went wrong! ${error}`);
    }
};