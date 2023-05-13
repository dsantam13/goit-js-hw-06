const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery = document.querySelector(".gallery");
ulGallery.style.listStyle = "none";
ulGallery.style.padding = 0;
ulGallery.style.display = "flex";
ulGallery.style.flexWrap = "wrap";
ulGallery.style.gap = "30px";
ulGallery.style.justifyContent = "center";

const liItem = images
  .map(({ url, alt }) => `<li><img src= "${url}" alt= "${alt}"/></li>`)
  .join(" ");

ulGallery.insertAdjacentHTML("beforeend", liItem);

const liGalery = document.querySelectorAll("li");

liGalery.forEach((item) => {
  item.firstElementChild.style.width = "1200px";
});




