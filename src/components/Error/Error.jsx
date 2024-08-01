import css from "./Error.module.css";

export const Error = ({ children }) => {
  return (
    <p className={css.text}>
      <b>{children}</b>
    </p>
  );
}
