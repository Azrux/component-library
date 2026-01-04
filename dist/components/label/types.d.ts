export interface LabelProps extends Omit<Partial<HTMLLabelElement>, "style"> {
    html?: string;
    text?: string;
    htmlFor?: string;
    style?: Partial<CSSStyleDeclaration>;
    error?: boolean;
}
//# sourceMappingURL=types.d.ts.map