import React, { useState } from 'react';
import {
    ApiResponseModel,
    ItemTypes,
    ResponseModelApiResponseModel,
} from '../../../api';
import { ApiClient } from '../../services';

const Example = () => {
    const [model, setModel] = useState<ResponseModelApiResponseModel>();
    const handleClick = () => {
        setModel((_) => undefined);

        const id = undefined;
        const itemTypes: ItemTypes[] = [ItemTypes.NUMBER_0, ItemTypes.NUMBER_1];
        const page = undefined;
        const limit = undefined;
        const options: any = {};

        new ApiClient().echo
            .apiv10EchoIndex(id, itemTypes, page, limit, options)
            .then((response) => {
                setModel((_) => response.data);
            })
            .catch((error: ApiResponseModel) => {
                console.error('Api error', error);
            });
    };

    return (
        <div>
            <div>
                <button onClick={handleClick}>Test</button>
            </div>
            <div>
                <pre>{model ? JSON.stringify(model, null, 4) : 'N/A'}</pre>
            </div>
        </div>
    );
};

export default Example;
