
export const myApplicationPromise = email => {
    return fetch(`https://service-sharing-server-lovat.vercel.app/applications?email=${email}`).then(res => res.json())
}