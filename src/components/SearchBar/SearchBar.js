import styles from './SearchBar.module.scss';

export default function SearchBar({ searchInput, setSearchInput }) {

    return (
        <div className={styles.SearchBar}>
            <input
                type='text'
                placeholder='Search'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    )
}
