import styles from './SearchBar.module.scss';
import { Search } from 'lucide-react';

export default function SearchBar({ searchInput, setSearchInput }) {

    return (
        <div className={styles.SearchBar}>
            <input
                type='text'
                placeholder={<><Search /> Search</>}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    )
}