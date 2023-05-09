import Title from '../../layout/main/Title';
import PostPreview from '../../layout/main/PostPreview';

import styles from './Home.module.css';

import { useEffect, useState } from 'react';

function Home() {

    const [posts, setPosts] = useState([]);

    // Função para pegar os posts da api
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`http://localhost/tcc/back-end/routes/posts/posts.php`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setPosts(data.data);
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts();
    }, []);

    return (
        <main className={styles.main}>
            <Title title="Página inicial"/>

            {
                posts.length > 0 ? (
                    posts.map((post) => (

                        <PostPreview 
                         key={post}
                         title={post.titulo_post}
                         content={post.conteudo_post}
                         datetime={post.datahora_post}
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