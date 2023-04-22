const base = "http://3.18.220.191/";
const userId = 3;

const getImagePath = (url) => {
    return base + "storage/" + url;
}

const fetchData = async(url) => {
    let obj;
    await fetch(url).then((response) => response.json()).then(data => {
        obj = data
    }).catch((err) => {
        console.log(err.message)
    })
    return obj;
}

const fetchSkills = async() => {
    let obj = await fetchData(base + "api/skills/" + userId);
    return obj
}

const fetchEducations = async() => {
    let obj = await fetchData(base + "api/educations/" + userId);
    return obj
}

export {
    getImagePath,
    fetchSkills,
    fetchEducations
};