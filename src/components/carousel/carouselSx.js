/**
 * Plain MUI `sx` for carousel chrome — kept separate from CarouselStyled so
 * pages never statically import `pure-react-carousel` just for these styles.
 */
export const carouselStyled = {
  overflow: "hidden",
  "& .carousel__back-button, & .carousel__next-button": {
    width: 30,
    color: "white",
    borderRadius: 0,
    transition: "1s",
    opacity: 0.5,
    backgroundColor: "dark.main",
    ":hover:not(:disabled)": {
      color: "white",
      backgroundColor: "dark.main",
      opacity: 1,
    },
  },
  "& .carousel__back-button": {
    left: 0,
    boxShadow: "-4px 0 7px -5px rgb(0 0 0 / 20%)",
  },
  "& .carousel__next-button": {
    right: 0,
    boxShadow: "4px 0 7px -5px rgb(0 0 0 / 20%)",
  },
  "& .carousel__back-button:disabled": {
    left: -100,
    transition: "0.3s",
  },
  "& .carousel__next-button:disabled": {
    right: -100,
    transition: "0.3s",
  },
};
