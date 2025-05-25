import fs from 'fs';
import React from 'react';
import {extractStyle} from '@ant-design/static-style-extract';
import {ConfigProvider} from 'antd';
import antdTheme from "../src/theme";

const outputPath = './src/app/antd.min.css';

const css = extractStyle((node) => (
    <ConfigProvider
        theme={antdTheme}
    >
        {node}
    </ConfigProvider>
));

fs.writeFileSync(outputPath, css);