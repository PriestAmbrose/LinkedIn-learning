const githubRequest  = async (login) => {
    let response = await fetch(
        `https://api.github.com/users/${login}`
    );
    let json = await response.json();
    let summary = `${json.login}, ${json.company}`;
    console.log(summary);
}

githubRequest('priestAmbrose');