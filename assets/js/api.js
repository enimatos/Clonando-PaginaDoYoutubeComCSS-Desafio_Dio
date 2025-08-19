export default async function fetchProfileData() {
  const response = await fetch("https://github.com/enimatos/Clonando-PaginaDoYoutubeComCSS-Desafio_Dio/blob/main/dados/dados.json"); 
  return await response.json();
}
