/**
 * me.js
 *
 * users/me route handler
 */

import Cookies from "js-cookie";

async function obtainUserInfo() {
    const accessToken = Cookies.get(["access"]);
    try {
        const response = await fetch("/api/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }).then((res) => {
            return res;
        });
        const responseData = await response.json();
        return { response: response, data: responseData };
    } catch (error) {
        console.error("Error:", error + ". Something went wrong when fetching user information");
        throw error;
    }
}

export default obtainUserInfo;