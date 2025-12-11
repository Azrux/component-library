import type { defaultSizes } from "@/utils/global-types";
import type { LabelProps } from "../label/types";

export interface InputProps extends Omit<Partial<HTMLInputElement>, "style"> {
  inputSize?: defaultSizes | string;
  style?: Partial<CSSStyleDeclaration>;

  /* Label */
  label?: string;
  labelStyle?: Partial<CSSStyleDeclaration>;
  labelProps?: LabelProps;

  /* Error */
  error?: boolean;
  errorMessage?: string;
  errorMessageStyle?: Partial<CSSStyleDeclaration>;
}

export interface StorybookInputProps extends InputProps {
  placeholder: string;
  type: string;
  sizeType: defaultSizes | string;
  customSize?: string;
}
