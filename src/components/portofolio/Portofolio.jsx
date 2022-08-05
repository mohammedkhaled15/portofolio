import { useEffect, useState } from 'react'
import axios from 'axios'
import "./portofolio.css"
// import image from "https://raw.githubusercontent.com/mohammedkhaled15/calculator-css-js/master/image.jpg"

const Portofolio = () => {
    const [filteredRepos, setFilteredRepos] = useState(null)
    const wordsToDeleteFromRepoName = {
        html: "",
        js: "",
        css: "",
        scss: ""
    }

    useEffect(() => {
        axios.get("https://api.github.com/users/mohammedkhaled15/repos").then(response => {
            const repos = response.data.filter(repo => repo.fork === false)
            setFilteredRepos(repos)
        })
    }, [])
    return (
        <section id='portofolio'>
            <h5>My Recent Work</h5>
            <h2>Portofolio</h2>
            <div className="container portofolio__container">
                <div className="filter-buttons">Filter will be added here</div>
                <div className="projects">
                    {

                        filteredRepos === null ? "Loading" : (
                            filteredRepos.map(repo => {
                                return (
                                    <div className="repo-card" key={repo.id}>
                                        <h4 >{repo.name.replace("-html", "").replace("-js", "").replace("-css", "").replace("-bootstrap", "").replace("-scss", "").trim()}</h4>
                                        <img src={`https://raw.githubusercontent.com/mohammedkhaled15/${repo.name}/master/image.png`} alt="repo main img" />
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Portofolio