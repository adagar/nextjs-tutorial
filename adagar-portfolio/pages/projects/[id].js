import Image from 'next/image';

export const getStaticPaths = async () => {
  // Seems not good to have this duped, how to address?
  const res = await fetch('https://a-nick-garza.com/blog/wp-json/wp/v2/artworks');
  const data = await res.json();
  const paths = data.map(project => {
    return {
      params: { 
        id: project.id.toString(),
      }}
  })
  return {
    paths,
    fallback: false
    }
}
 export const getStaticProps = async (context) => {
  // this function will run at build time
  // id we need will be part of that context arg
  const id = context.params.id;


  const res = await fetch(`https://a-nick-garza.com/blog/wp-json/wp/v2/artworks/${id}`);
  const data = await res.json();

  const imgUrl = data._links['wp:featuredmedia'][0].href;
  console.log("#### IMAGE URL:", imgUrl);
  const imgRes = await fetch(imgUrl);
  const imgData = await imgRes.json();

  return {
    props: { project: data, imgData: imgData }
  }
 }

const Details = ({project, imgData}) => {
  // const imgData = fetchImageData(project.id);
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{__html:project.title.rendered}}></h1>
      <p dangerouslySetInnerHTML={{__html:project.content.rendered}}></p>
      <Image width={imgData.media_details.width} height={imgData.media_details.height} src={imgData.source_url} />
    </div>
  )
}

export default Details
