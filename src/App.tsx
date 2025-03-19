import { Header } from './components/Header.tsx';
import { Post, PostType } from './components/Post.tsx';
import { Sidebar } from './components/Sidebar.tsx';

import styles from './App.module.css';

import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts: PostType[] = [ 
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/iuryescano.png',
      name: 'Iury Escano',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projetos no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-03-10 19:49:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2025-03-10 19:51:00'),
  }
]

//iteracao de posts

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
              )
          })}

        </main>
      </div>
    </div>
  )
}
