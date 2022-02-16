import { getToken } from "./authManager";

const apiUrl = "/api/video";



export const getAllVideos = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get videos.");
            }
        });
    });
};

export const getAllVideosWithComments = () => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/getwithcomments`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to get videos.");
            }
        });
    });
};

export const searchVideos = (videoSearchTerm) => {
    console.log('searching?')
    return getToken().then((token) => {
        return fetch(`${apiUrl}/search?q=${videoSearchTerm}&sortDesc=false`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("An unknown error occurred while trying to search videos.");
            }
        });
    });
};


// export const SearchVideos = (terms) => {
//     return fetch(`${baseUrl}/search?q=${terms}`).then((res) => res.json())
// }



export const addVideo = (video) => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else if (resp.status === 401) {
                throw new Error("Unauthorized");
            } else {
                throw new Error("An unknown error occurred while trying to save a new quote.");
            }
        });
    });
};