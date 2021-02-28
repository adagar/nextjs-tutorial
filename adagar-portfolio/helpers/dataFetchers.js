export const getImgData = async (id) => {
  const res = await fetch(`https://a-nick-garza.com/blog/wp-json/wp/v2/artworks/${id}`);
  const data = await res.json();
  const imgUrl = data._links['wp:featuredmedia'][0].href;

  const imgRes = await fetch(imgUrl);
  const imgData = await imgRes.json();

  return imgData;
}