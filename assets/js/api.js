export default async function fetchProfileData() {
  const response = await fetch("../dados/dados.json"); 
  return await response.json();
}