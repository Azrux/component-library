import type { defaultColors, defaultSizes } from "@/utils/global-types";

export interface ButtonProps extends Partial<HTMLButtonElement> {
  text: string;
  color?: defaultColors | string;
  size?: defaultSizes;
}

export interface StorybookButtonProps extends ButtonProps {
  colorType: defaultColors | "custom" | string;
  customColor?: string;
  sizeType?: defaultSizes;
  customSize?: string;
}
