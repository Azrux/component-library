import type { defaultColors, defaultSizes } from "@/utils/global-types";

export interface ButtonProps {
  text: string;
  color?: defaultColors | string;
  size?: defaultSizes | string;
  style?: React.CSSProperties;
}

export interface StorybookButtonProps extends ButtonProps {
  colorType: defaultColors | "custom" | string;
  customColor?: string;
  sizeType: defaultSizes | "custom" | string;
  customSize?: string;
}
