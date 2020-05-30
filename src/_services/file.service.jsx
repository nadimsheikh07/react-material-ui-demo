import { apiConfig } from './api';
export const fileService = {
    _upload,

};

function _upload(file, type) {
    const formData = new FormData();
    formData.append('file', file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    let url;
    if (type === 'document') {
        url = '/upload/document';
    } else {
        url = '/upload/image';
    }
    return apiConfig.post(url, formData, config)
        .then(result => {
            return result;
        });
}
