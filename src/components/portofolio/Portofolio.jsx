import { useEffect, useState } from 'react'
import axios from 'axios'
import "./portofolio.css"
import Filters from './Filters'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from './projects'



const Portofolio = () => {
    const [filteredRepos, setFilteredRepos] = useState(null)
    const [filterCriteria, setFilterCriteria] = useState("All")
    const [choosedRepos, setChoosedRepos] = useState([])

    const deleteAddedWords = str => {
        const words = ["PS22-", "-html", "-css", "-scss", "-js", "-react", "-tailwind", "-bootstrap", "-oop", "-reduxtk"]
        for (let i in words) {
            str = str.replace(words[i], "").trim()
        }
        return str
    }

    useEffect(() => {
        // axios.get("https://api.github.com/users/mohammedkhaled15/repos").then(response => {
        //     const repos = response.data.filter(repo => repo.fork === false && repo.name.startsWith("PS22"))
        //     setFilteredRepos(repos)
        //     setChoosedRepos(repos)
        // })
        setFilteredRepos(projects)
        setChoosedRepos(projects)
    }, [])
    return (
        <section id='portofolio'>
            <h5>My Recent Work</h5>
            <h2>Portofolio</h2>
            <div className="container portofolio__container">
                {filteredRepos === null ? "" : <Filters filteredRepos={filteredRepos} setChoosedRepos={setChoosedRepos} filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} choosedRepos={choosedRepos} />}
                <AnimatePresence>
                    <motion.div layout className="projects">
                        {
                            choosedRepos === null ? "Loading" : (
                                choosedRepos.map(repo => {
                                    return (
                                        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
                                            className="repo-card" key={repo.id}>
                                            <img src={repo.imgUrl} alt="repo main img" />
                                            <div className="overlay">
                                                <div className="overlay__cta">
                                                    <a href={repo.demoLink} className="btn btn-primary" target="_blan;">Live Demo</a>
                                                    <a href={repo.repoLink} className="btn" target="_blan;">Repo</a>
                                                </div>
                                                <h4 >{deleteAddedWords(repo.name).replaceAll("-", " ")}</h4>
                                            </div>
                                        </motion.div>
                                    )
                                })
                            )
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </section >
    )
}

export default Portofolio