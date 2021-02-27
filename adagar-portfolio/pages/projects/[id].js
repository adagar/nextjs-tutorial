export const getStaticPaths = async () => {
  // Seems not good to have this duped, how to address?
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map(project => {
    return {
      params: { 
        id: project.id.toString()
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


  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { project: data }
  }
 }

const Details = ({project}) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.username}</p>
      <p>{project.website}</p>
      <p>{project.address.city}</p>
    </div>
  )
}

export default Details
