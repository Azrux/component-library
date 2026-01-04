import Label from "../label/label";
const Input = (props) => {
    const { type = "text", inputSize = "medium", style, disabled, label, labelProps, error, errorMessage, errorMessageStyle, id, ...rest } = props;
    const wrapper = document.createElement("div");
    wrapper.className = "input-wrapper";
    /** Label */
    if (label || labelProps?.text) {
        const labelEl = Label({
            text: label || labelProps?.text,
            htmlFor: id,
            ...labelProps,
        });
        wrapper.appendChild(labelEl);
    }
    /** Input */
    const input = document.createElement("input");
    input.className = "input";
    input.type = type;
    if (id)
        input.id = id;
    if (inputSize) {
        input.classList.add(`input-${inputSize}`);
    }
    if (disabled) {
        input.classList.add("input-disabled");
        input.disabled = true;
    }
    if (error) {
        input.classList.add("input-error");
        // Pass error = true to label if exists
        if (label) {
            const labelEl = wrapper.querySelector("label");
            if (labelEl)
                labelEl.classList.add("label-error");
        }
    }
    if (style)
        Object.assign(input.style, style);
    Object.assign(input, rest);
    wrapper.appendChild(input);
    /** Error Message */
    if (error && errorMessage) {
        const err = document.createElement("div");
        err.className = "input-error-message";
        err.textContent = errorMessage;
        if (errorMessageStyle)
            Object.assign(err.style, errorMessageStyle);
        wrapper.appendChild(err);
    }
    return wrapper;
};
export default Input;
