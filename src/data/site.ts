export const siteConfig = {
  name: "Casa e Piscina",
  url: "https://casaepiscina.com.br",
  phone: "(31) 9 9832 - 5464",
  whatsapp: "5531998325464",
  email: "casaepiscinafibra@gmail.com",
  city: "Belo Horizonte",
  state: "MG",
  defaultImage: "/assets/logo/og-image-1200x630.png",
  social: [
    "https://twitter.com/Casaepiscina",
    "http://www.tumblr.com/casaepiscina",
    "https://www.reddit.com/user/casaepiscina",
    "https://www.youtube.com/channel/UCI8VUkgcbWnYdUOtr8I14HQ"
  ],
};

export const whatsappMessage = "Olá, Gostaria de solicitar um orçamento sem compromisso!";

export function whatsappUrl(message = whatsappMessage) {
  return `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(message)}`;
}
