"use server"
import { signOut } from "@/auth";

export const logOut = async () => {
    try {
        await signOut({ redirect: false });
        return { success: true };
    } catch (error) {
        console.error("Error during sign out:", error);
        return { success: false, error: "Failed to sign out" };
    }
};