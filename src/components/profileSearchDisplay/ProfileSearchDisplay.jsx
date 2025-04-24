import { useState } from "react"
import { ProfileInfo } from "../profileInfo/ProfileInfo"
import { SearchBar } from "../searchBar/SearchBar"
import classes from "./profileSearchDisplay.module.css"

export const ProfileSearchDisplay = () => {
    const [username, setUsername] = useState("");

    const handleSearch = (value) => {
        setUsername(value.trim());
    };

    return (
        <div className={classes.profile_search_display}>
            <div className={classes.profile_search_section}>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className={classes.profile_results_section}>
                <ProfileInfo username={username} />
            </div>
        </div>
    );
}
