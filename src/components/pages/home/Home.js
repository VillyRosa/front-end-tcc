import Title from '../../layout/main/Title';
import PostPreview from '../../layout/main/PostPreview';

import styles from './Home.module.css';

import { useState } from 'react';

function Home() {

    const [posts, setPosts] = useState([]);

    (async function getPosts() {

        await fetch(`http://localhost/tcc/back-end/routes/posts/posts.php`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPosts(data.data);
        })
        .catch((err) => console.log(err))

    })()

    return (
        <main className={styles.main}>
            <Title title="Página inicial"/>

            {
                posts.length > 0 ? (
                    posts.map((post) => (

                        <PostPreview 
                         key={post}
                         title={post.titulo_post}
                        />

                )))
                : (
                    <p>Nenhum post encontrado!</p>
                )
            }

        </main>
    );
}

export default Home;