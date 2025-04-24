import { useEffect, useState } from "react";
import classes from "./profileInfo.module.css";

export const ProfileInfo = ({ username }) => {
    const [githubProfile, setGithubProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        const getGithubProfile = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(`Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente`);
                    } else {
                        throw new Error("Erro ao buscar o perfil. Tente novamente mais tarde.");
                    }
                }

                const data = await response.json();
                setGithubProfile(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setGithubProfile(null);
            }
        };

        getGithubProfile();
    }, [username]);

    console.log(githubProfile)

    return (
        <>
            {error ? (
                <section className={classes.error_message_display}>
                    <p>{error}</p>
                </section>
            ) : githubProfile ? (
                <section className={classes.profile_search_display}>
                    <div className={classes.profile_picture_wrapper}>
                        <img src={githubProfile.avatar_url} alt="Avatar"/>
                    </div>
                    <div className={classes.profile_text}>
                        <h2>{githubProfile.login}</h2>
                        {githubProfile.bio ? (
                            <p>{githubProfile.bio}</p>
                        ) : (
                            <p>Perfil não possui biografia</p>
                        )}
                    </div>
                </section>
            ) : (
                <p>Carregando...</p>
            )}
        </>
    );
}
