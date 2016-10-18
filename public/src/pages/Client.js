function getUser(cb) {
    return fetch(`/user`, {
        accept: 'application/json',
    }).then(checkStatus)
       .then(parseJSON)
       .then(cb);
}

function checkStatus(res) {
    if(res.status >= 200 && res.status < 300) {
        return res;
    } else {
        const error = new Error(`HTTP Error ${res.statusText}`);
        error.status = res.statusText;
        error.response = res;
        console.log(error);
        throw error;
    }
}

function parseJSON(res) {
    return res.json();
}

const Client = { getUser };
export default Client;
