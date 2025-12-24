const crypto = require('crypto');

// This list holds your keys in memory
let activeKeys = ["GUEST-TEST-KEY"]; 

exports.handler = async (event) => {
    // A. WEB GENERATOR (GET)
    if (event.httpMethod === "GET" && event.queryStringParameters.newKey) {
        const newKey = event.queryStringParameters.newKey;
        activeKeys.push(newKey);
        return {
            statusCode: 200,
            body: JSON.stringify({ status: "Registered", key: newKey })
        };
    }

    // B. ANDROID LOGIN (POST) - Matches your C++ login.h
    if (event.httpMethod === "POST") {
        const params = new URLSearchParams(event.body);
        const user_key = params.get('user_key');
        const serial = params.get('serial'); 

        if (activeKeys.includes(user_key)) {
            const salt = "Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E";
            const authString = `PUBG-${user_key}-${serial}-${salt}`;
            const token = crypto.createHash('md5').update(authString).digest('hex');

            return {
                statusCode: 200,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    status: true,
                    data: { token: token, rng: Math.floor(Date.now() / 1000) }
                })
            };
        }
        return { statusCode: 200, body: JSON.stringify({ status: false, reason: "Invalid Key" }) };
    }

    return { statusCode: 400, body: "Invalid Request" };
};
