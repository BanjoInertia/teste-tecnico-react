import { useState } from "react";
import githubFinderLogo from "../../assets/githubFinderLogo.png";
import searchIcon from "../../assets/searchIcon.png";
import classes from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        if (inputValue) {
            onSearch(inputValue);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <section className={classes.searchbar_logo_container}>
            <img className={classes.github_finder_logo} src={githubFinderLogo} alt="GitHub Finder Logo" />
            <div className={classes.searchbar_container}>
                <input
                    className={classes.searchbar}
                    type="text"
                    placeholder="Digite um usuário do Github"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className={classes.searchbar_icon} onClick={handleSearch} type="submit" aria-label="Search">
                    <img src={searchIcon} />
                </button>
            </div>
        </section>
    );
};
