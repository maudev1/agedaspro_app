import axios from "axios";
// import AuthService from "./AuthService";

export default {

    makeRequest(url, method) {

        // let credentials = AuthService.getToken();

        return new Promise((resolve, reject) => {

            let options = {
                method: method,
                url: url,
                headers: {
                    'Content-Type': 'appication/json;charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                    // 'Authorization' : `Bearer ${credentials}`
                }
            };

            axios.request(options).then(function (response) {

                resolve(response.data)

            }).catch(function (error) {

                reject(error);

            });

        })

    },




} 