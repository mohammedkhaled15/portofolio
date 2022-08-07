import { useEffect } from "react"

const Filters = ({ filteredRepos, setChoosedRepos, filterCriteria, setFilterCriteria }) => {
    // const handleClick = (e) => {
    //     console.log(e.target.innerHTML)
    //     if (e.target.innerHTML === "ALL") {
    //         setChoosedRepos(filteredRepos)
    //     } else {
    //         let copiedRepos = filteredRepos.filter(repo => repo.name.includes(e.target.innerHTML))
    //         setChoosedRepos(copiedRepos)
    //     }
    // }
    useEffect(() => {
        if (filterCriteria === "All") {
            setChoosedRepos(filteredRepos)
        } else {
            setChoosedRepos(filteredRepos.filter(repo => repo.name.includes(filterCriteria)))
        }
    }, [filterCriteria])
    return (
        <div className='filter-container'>
            <button className={`btn btn-primary ${filterCriteria === "All" ? "active" : ""}`} onClick={(e) => setFilterCriteria("All")}>All</button>
            <button className={`btn btn-primary ${filterCriteria === "HTML".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("HTML".toLowerCase())}>HTML</button>
            <button className={`btn btn-primary ${filterCriteria === "CSS".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("CSS".toLowerCase())}>CSS</button>
            <button className={`btn btn-primary ${filterCriteria === "js".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("js".toLowerCase())}>javaScript</button>
            <button className={`btn btn-primary ${filterCriteria === "React".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("React".toLowerCase())}>React</button>
            <button className={`btn btn-primary ${filterCriteria === "Bootstrap".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("Bootstrap".toLowerCase())}>Bootstrap</button>
            <button className={`btn btn-primary ${filterCriteria === "Tailwind".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("Tailwind".toLowerCase())}>Tailwind</button>
            <button className={`btn btn-primary ${filterCriteria === "Scss".toLocaleLowerCase() ? "active" : ""}`} onClick={(e) => setFilterCriteria("Scss".toLowerCase())}>Sass</button>
        </div>
    )
}

export default Filters