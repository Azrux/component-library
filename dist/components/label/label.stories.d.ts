import type { LabelProps } from "./types";
import type { StoryFn } from "@storybook/html";
import "./label.css";
declare const _default: {
    title: string;
    argTypes: {
        text: {
            control: string;
        };
        html: {
            control: string;
        };
        htmlFor: {
            control: string;
        };
        style: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: StoryFn<LabelProps>;
export declare const WithHTML: StoryFn<LabelProps>;
export declare const WithHtmlFor: () => HTMLDivElement;
export declare const CustomStyle: StoryFn<LabelProps>;
//# sourceMappingURL=label.stories.d.ts.map