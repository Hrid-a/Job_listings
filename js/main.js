const jobContainer = document.querySelector("main .container")
async function getjobs() {
    try{
        let response = await fetch("../data.json");
        let data = await response.json()
        renderJobs(data)
        // return data
    
    }catch (err) {
        console.log(`An error happend ${err.message}`);
    }
    
    
}


function renderJobs(arr){
    jobItem = arr.map(item => {
            return `
            <div class="content">
                <section class="job-container">
                    <article class="img-container">
                        <img src="${item.logo}" alt="${item.company}">
                    </article>
                    <article class="comp-info">
                        <p>
                        <span>${item.company}</span>
                        ${item.featured ? item.new ? `<span class="new">new !</span><span class="featured">featured</span>` :" ": item.new ?`<span class="new">new !</span>`:""}
                        </p>
                        <h4 class="job__title">${item.position}</h4>
                        <div class="comp-details">
                        <span>${item.postedAt}</span>
                        <span>${item.contract}</span>
                        <span>${item.location}</span>
                        </div>
                    </article>
                </section>
                <section class="job-info">
                    <p>${item.role}</p>
                    <p>${item.level}</p>
                    ${item.languages.map(lang => `<p>${lang}</p>`).join("")}
                    ${item.tools.map(tool => `<p>${tool}</p>`).join("")}
                </section>
            </div>
            `
    }).join("");

    jobContainer.innerHTML = jobItem;
}

getjobs()


