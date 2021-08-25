export const entry: string;
export const mode: string;
export namespace output {
    const path: string;
    const filename: string;
}
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
            };
        };
    } | {
        test: RegExp;
        use: string;
        exclude: RegExp;
    })[];
}
export namespace resolve {
    const extensions: string[];
}
//# sourceMappingURL=webpack.config.d.ts.map