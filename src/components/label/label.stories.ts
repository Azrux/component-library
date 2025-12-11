import Label from "./label";
import InputComponent from "../input/input";
import type { LabelProps } from "./types";
import type { StoryFn } from "@storybook/html";
import "./label.css";

export default {
  title: "Components/Label",
  argTypes: {
    text: { control: "text" },
    html: { control: "text" },
    htmlFor: { control: "text" },
    style: { control: "object" },
  },
};

/* Template */
const Template: StoryFn<LabelProps> = (args) => {
  return Label(args);
};

/* Default */
export const Default = Template.bind({});
Default.args = {
  text: "Label",
};

/* Label with HTML */
export const WithHTML = Template.bind({});
WithHTML.storyName = "Label with HTML";
WithHTML.args = {
  html: 'Name <span style="color: red">*</span>',
};

/* With htmlFor, linked to an input */
export const WithHtmlFor = () => {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "8px";
  container.style.width = "300px";

  /* Create Label using Label component */
  const label = Label({
    text: "Email",
    htmlFor: "email-input",
    style: { fontWeight: "bold" },
  });

  /* Create Input using Input component */
  const input = InputComponent({
    id: "email-input",
    type: "text",
    placeholder: "Enter your email",
    inputSize: "medium",
  });

  container.appendChild(label);
  container.appendChild(input);

  return container;
};

/* Custom style */
export const CustomStyle = Template.bind({});
CustomStyle.storyName = "Label custom style";
CustomStyle.args = {
  text: "Username",
  style: {
    color: "purple",
    fontWeight: "bold",
    fontSize: "18px",
  },
};
