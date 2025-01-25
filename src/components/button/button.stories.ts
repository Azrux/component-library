import ButtonComponent from "./button";
import type { StorybookButtonProps } from "./types";
import "./button.css";
import type { StoryFn } from "@storybook/html";
import { COLORS, SIZES } from "@/utils/constants";

export default {
  title: "Components/Button",
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

const Template: StoryFn<StorybookButtonProps> = (args) => {
  const color = args.colorType === "custom" ? args.customColor : args.colorType;
  const size = args.sizeType === "custom" ? args.customSize : args.sizeType;
  return ButtonComponent({ text: args.text, color, size, style: args.style });
};

// Default
export const Button = () => {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "20px";

  const colorsRow = document.createElement("div");
  colorsRow.style.display = "flex";
  colorsRow.style.gap = "10px";
  colorsRow.style.flexWrap = "wrap";

  for (const color of COLORS) {
    const button = ButtonComponent({ text: color, color, size: "medium" });
    colorsRow.appendChild(button);
  }

  const sizesRow = document.createElement("div");
  sizesRow.style.display = "flex";
  sizesRow.style.gap = "10px";
  sizesRow.style.flexWrap = "wrap";

  for (const size of SIZES) {
    const button = ButtonComponent({ text: size, color: "primary", size });
    sizesRow.appendChild(button);
  }

  container.appendChild(colorsRow);
  container.appendChild(sizesRow);

  return container;
};

// Color customization
export const ColorCustomization = Template.bind({});
ColorCustomization.storyName = "Color Customization";
ColorCustomization.args = {
  text: "Click me",
  colorType: "primary",
  customColor: "#ff5722",
};

ColorCustomization.argTypes = {
  colorType: {
    control: {
      type: "radio",
    },
    options: [...COLORS, "custom"],
  },
  customColor: {
    control: {
      type: "color",
    },
    if: { arg: "colorType", eq: "custom" },
  },
  style: {
    control: {
      type: "object",
    },
  },
};

// Size customization
export const SizeCustomization = Template.bind({});
SizeCustomization.storyName = "Size Customization";
SizeCustomization.args = {
  text: "Click me",
  sizeType: "medium",
  customSize: "20px",
};

SizeCustomization.argTypes = {
  sizeType: {
    control: {
      type: "radio",
    },
    options: [...SIZES, "custom"],
  },
  customSize: {
    control: {
      type: "text",
    },
    if: { arg: "sizeType", eq: "custom" },
  },
  style: {
    control: {
      type: "object",
    },
  },
};
