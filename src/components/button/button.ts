import type { ButtonProps } from "./types";

const Button = (props: ButtonProps): HTMLButtonElement => {
  const { text, color = "primary", size = "medium", style } = props;

  const button = document.createElement("button");
  button.className = "button";

  // Define color
  if (
    color === "primary" ||
    color === "secondary" ||
    color === "info" ||
    color === "danger" ||
    color === "warning" ||
    color === "success"
  ) {
    button.classList.add(`button-${color}`);
  } else if (typeof color === "string") {
    button.style.backgroundColor = color;
  }

  // Define size
  if (size === "small" || size === "medium" || size === "large") {
    button.classList.add(`button-${size}`);
  } else if (typeof size === "string") {
    button.style.padding = size;
  }

  // Define text
  button.innerText = text;

  // Define style
  if (style) {
    Object.assign(button.style, style);
  }

  return button;
};

export default Button;
