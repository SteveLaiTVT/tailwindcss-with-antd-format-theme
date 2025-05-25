"use client";

import {PropsWithChildren} from "react";
import {ConfigProvider} from "antd";
import antdTheme from "@/theme";
import {px2remTransformer, StyleProvider} from "@ant-design/cssinjs";

const px2rem = px2remTransformer({
    rootValue: 32, // 32px = 1rem; @default 16
});


const AntdConfigProvider = ({children}: PropsWithChildren) => (
    <StyleProvider transformers={[px2rem]}>
        <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </StyleProvider>
)

export default AntdConfigProvider;