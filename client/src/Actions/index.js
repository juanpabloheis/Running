import axios from "axios";
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

export const setUserActivities = (payload) => {
    return {
        type: "SET_USER_ACTIVITIES",
        payload: payload,
    };
};

export const setUser = (payload) => {
    return {
        type: "SET_USER",
        payload: payload,
    };
};

export const testAuthGetter = async (authToken) => {
    try {
        const response = await axios.post(
            `https://www.strava.com/api/v3/oauth/token?client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}&code=${authToken}&grant_type=authorization_code`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserData = async (userID, accessToken) => {
    try {
        const response = await axios.get(
            `https://www.strava.com/api/v3/athletes/${userID}/stats`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        console.log('response.data', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getStats = async (userID) => {
    console.log(
        'REACT_APP_CLIENT_ID', process.env.REACT_APP_CLIENT_ID, 
        'REACT_APP_CLIENT_SECRET', process.env.REACT_APP_CLIENT_SECRET,  
        'REACT_APP_REFRESH_TOKEN', process.env.REACT_APP_REFRESH_TOKEN,
    )

    const reauthorizeResponse = await fetch("https://www.strava.com/oauth/token",{
        method: 'post',

        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
            refresh_token: process.env.REACT_APP_REFRESH_TOKEN,
            grant_type: 'refresh_token'
        })
    })

    const reauthorizeJson = await reauthorizeResponse.json()
    const accessToken = reauthorizeJson.access_token
    const response = await fetch(`https://www.strava.com/api/v3/athletes/${userID}/stats?access_token=${accessToken}`)
    const data = await response.json()
    console.log(data)
}

       
export const getActivityMonthlyState = async (userID, access_token, refresh_token) => {
    try{
        console.log(
            'REACT_APP_CLIENT_ID', process.env.REACT_APP_CLIENT_ID, 
            'REACT_APP_CLIENT_SECRET', process.env.REACT_APP_CLIENT_SECRET,  
            'REACT_APP_REFRESH_TOKEN', process.env.REACT_APP_REFRESH_TOKEN,
        )
        
        // const reauthorizeResponse = await fetch("https://www.strava.com/oauth/token",{
        //     method: 'post',

        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },

        //     body: JSON.stringify({
        //         client_id: process.env.REACT_APP_CLIENT_ID,
        //         client_secret: process.env.REACT_APP_CLIENT_SECRET,
        //         refresh_token: refresh_token,
        //         grant_type: 'refresh_token'
        //     })
        // })

        // const reauthorizeJson = await reauthorizeResponse.json()
        // const accessToken = reauthorizeJson.access_token

        // console.log('reauthorizeJson', reauthorizeJson)
        // console.log('accessToken', accessToken)

        const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?before=1&after=1&page=1&per_page=1`,{
            method: 'get',

            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
            },
        })

        const responseJson = await response.json()
        console.log(responseJson)
    }catch(error){
        console.log(error)
    }
}