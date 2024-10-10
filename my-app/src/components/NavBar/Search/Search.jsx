import "./Search.css"


const Search = () => {
    return (

        <div className="searchbar">
            <input type="text" name="search" placeholder="Search..." />
            <span className="searchbar-icon"><i className="fas fa-search"></i></span>
        </div>


    )
}
export default Search;