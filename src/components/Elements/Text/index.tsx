import { TextPropTypes } from "../../types";
import styles from "../styles.module.css";

const Text = ({
  children,
  className,
  maxline,
  ...props
}: TextPropTypes) => {
  return (
    <>
      <div
        className={`${styles.text || ""} ${className || ""} ${
          maxline ? styles[`maxline${maxline}`] : ""
        }`}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Text;
