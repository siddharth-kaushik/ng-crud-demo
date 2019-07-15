export interface Hero {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: {
    url: string;
    text: string;
  };
}
