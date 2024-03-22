import styles from './SearchBar.module.scss'
export default function(
    {searchInput, setSearchInput}
){
    return(
        <div className={styles.SearchBar}>
        <input type='text' placeholder="Search.." value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
        <img className={styles.icon}
          src="https://i.imgur.com/jtHO3uy.png"
        />
        </div>

    )
}