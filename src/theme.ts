import {ThemeConfig} from "antd/es/config-provider/context";

const antdTheme: ThemeConfig = {
    token: {
        colorBgBase: "#F5F5F5",
        screenXS: 480,
        screenSM: 576,
        screenMD: 768,
        screenLG: 992,
        screenXL: 1200,
        screenXXL: 1600,
    },
    cssVar: {
        key: "antd"
    },
    hashed: false
}

export default antdTheme;