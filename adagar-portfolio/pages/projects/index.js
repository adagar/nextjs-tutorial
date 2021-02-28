import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';
import Image from 'next/image';
import {getImgData} from '../../helpers/dataFetchers';

export const getStaticProps = async () => {
  // this function will run at build time
  const res = await fetch('https://a-nick-garza.com/blog/wp-json/wp/v2/artworks');
  const data = await res.json();

  const assembleProjectData = async () => {
    return Promise.all(data.map(async project => {
      const imgData = await getImgData(project.id);
      return ({
        id: project.id,
        title: project.title,
        imgData
      }
      )
    }))
  };

  const projectData = await assembleProjectData();

  return {
    props: { projects: projectData }
  }
}

const Projects = ({ projects }) => {
  const projectList = projects.map((project) => {

    return (
      <Link key={project.id} href={`/projects/${project.id}`}>
        <a href="" className={styles.single}>
          <h3 dangerouslySetInnerHTML={{__html: project.title.rendered}}></h3>
          <div
            style={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} >
          <Image src={project.imgData.media_details.sizes.medium.source_url} 
                  width={project.imgData.media_details.sizes.medium.width}
                  height={project.imgData.media_details.sizes.medium.height}
          />
          </div>
        </a>
      </Link>
    )
  })
  return (
    <>
    <Head>
      <title>Project List | Projects</title>
      <meta keywords="art adagar next projects" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
    </Head>
    <div>
      <h1>All Projects</h1>
      <div className={styles.flexContainer}>
        {projectList}
      </div>
    </div>
    </>
  )
}

export default Projects
