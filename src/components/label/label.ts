import { LabelProps } from "./types";

const Label = (props: LabelProps): HTMLLabelElement => {
  const { html, text, htmlFor, style, error, ...rest } = props;

  const label = document.createElement("label");
  label.classList.add("label");

  if (rest.className) label.classList.add(...rest.className.split(" "));
  delete rest.className;

  if (htmlFor) label.htmlFor = htmlFor;

  /* Allow HTML */
  if (html != null) {
    label.innerHTML = html;
  } else if (text != null) {
    label.textContent = text;
  }

  if (error) {
    label.classList.add("label-error");
  }

  if (style) Object.assign(label.style, style);

  Object.assign(label, rest);

  return label;
};

export default Label;
