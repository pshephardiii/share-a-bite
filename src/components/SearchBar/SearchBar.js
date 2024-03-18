export default function(
    {searchInput, setSearchInput}
){
    return(
        <>
        <input type='text' placeholder="Type to Search" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
        </>

    )
}