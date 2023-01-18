import { Input } from "antd";

function Search(props) {

    return (
        <div id="searchbar">
            <label htmlFor='search'>Search</label><br/><br/>
            <Input id="search" type="text" onChange={ props.filterFoods } style={ { width: "500px" } } autoComplete="off" />
        </div>
    );

}

export default Search;