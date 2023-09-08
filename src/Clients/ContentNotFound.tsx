import * as fs from "fs";

// @flow
import * as React from 'react';
import {Button, Result} from "antd";

type Props = {

};
export const ContentNotFound = (props: Props) => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" href="/">Back Home</Button>}
        />
    );
};