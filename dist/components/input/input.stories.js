import InputComponent from "./input";
import "./input.css";
import { SIZES } from "@/utils/constants";
export default {
    title: "Components/Input",
    argTypes: {
        placeholder: { control: "text" },
    },
};
/* Template for customizable stories */
const Template = (args) => {
    return InputComponent({
        type: args.type,
        placeholder: args.placeholder,
        inputSize: args.inputSize,
        disabled: args.disabled,
        style: args.style,
        labelProps: args.labelProps,
        error: args.error,
        errorMessage: args.errorMessage,
    });
};
/* Default preview with all sizes */
export const InputSizes = () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "20px";
    container.style.width = "300px";
    for (const size of SIZES) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "column";
        row.style.gap = "6px";
        /* Create Input with Label using labelProps */
        const input = InputComponent({
            placeholder: `${size} input`,
            inputSize: size,
            type: "text",
            labelProps: {
                text: `${size.charAt(0).toUpperCase() + size.slice(1)} size`,
            },
        });
        row.appendChild(input);
        container.appendChild(row);
    }
    return container;
};
/* Type customization example */
export const Types = Template.bind({});
Types.storyName = "Types";
Types.args = {
    placeholder: "Type here...",
    type: "email",
    inputSize: "medium",
    labelProps: { text: "Email input" },
};
Types.argTypes = {
    type: {
        control: "radio",
        options: ["text", "email", "password", "number", "search"],
    },
    inputSize: {
        control: "radio",
        options: SIZES,
    },
    labelProps: {
        control: "object",
    },
};
/* Input with error */
export const WithError = Template.bind({});
WithError.storyName = "Input with Error";
WithError.args = {
    placeholder: "Enter your email",
    inputSize: "medium",
    type: "email",
    labelProps: { text: "Email" },
    error: true,
    errorMessage: "This field is required",
};
WithError.argTypes = {
    inputSize: {
        control: "radio",
        options: SIZES,
    },
    type: {
        control: "radio",
        options: ["text", "email", "password", "number", "search"],
    },
    labelProps: {
        control: "object",
    },
    error: {
        control: "boolean",
    },
    errorMessage: {
        control: "text",
    },
};
/* Disabled Input */
export const Disabled = Template.bind({});
Disabled.storyName = "Disabled Input";
Disabled.args = {
    placeholder: "Disabled input",
    inputSize: "medium",
    type: "text",
    disabled: true,
};
Disabled.argTypes = {
    inputSize: {
        control: "radio",
        options: SIZES,
    },
    type: {
        control: "radio",
        options: ["text", "email", "password", "number", "search"],
    },
};
