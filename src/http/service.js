export default {

    makeRequest : async function(url, options) {

        let response = await fetch(url, options);

        if(response.ok){
            return  await response.json();

        }else{
            console.log(response)
        }

    },




} 