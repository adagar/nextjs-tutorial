import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';

export const getStaticProps = async () => {
  // this function will run at build time
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { projects: data }
  }
}

const Projects = ({ projects }) => {
  const projectList = projects.map((project) => {
    return (
      <Link key={project.id} href={`/projects/${project.id}`}>
        <a href="" className={styles.single}>
          <h3>{project.name}</h3>
        </a>
      </Link>
    )
  })
  return (
    <>
    <Head>
      <title>Project List | Projects</title>
      <meta keywords="art adagar next projects" />
    </Head>
    <div>
      <h1>All Projects</h1>
      {projectList}
    </div>
    </>
  )
}

export default Projects
