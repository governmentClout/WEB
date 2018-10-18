export function PostData(type, userData){

    let baseUrl = 'http://api.staybusy.ng:3000/';

    return new Promise((resolve, reject) => {

        fetch(baseUrl+type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });

    })
}