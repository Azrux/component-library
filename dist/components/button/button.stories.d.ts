import type { StorybookButtonProps } from "./types";
import "./button.css";
import type { StoryFn } from "@storybook/html";
declare const _default: {
    title: string;
    argTypes: {
        text: {
            control: {
                type: string;
            };
        };
        disabled: {
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Button: () => HTMLDivElement;
export declare const ColorCustomization: StoryFn<StorybookButtonProps>;
export declare const SizeCustomization: StoryFn<StorybookButtonProps>;
//# sourceMappingURL=button.stories.d.ts.map