import Cherry from 'src/libs/cherry.js';

export default class Manage {
    static addFile (project, type, path, name, alias, data) {
        let postData = {
            project,
            type,
            path,
            name,
            alias,
            data,
        };
        return Cherry.post('/drawing/graphy/add', postData);
    };

    static addFile2 (project, file) {
        let postData = {
            project,
            ...file,
        };
        return Cherry.post('/drawing/graphy/add', postData);
    };

    static queryFile (project, query = JSON.stringify({size: 50})) {
        let data = {
            project,
            query,
        };
        return Cherry.post('/drawing/graphy/query', data);
    };

    static updateFile (project, id, type, path, name, alias, data) {
        let postData = {
            project,
            id,
            type,
            path,
            name,
            alias,
            data,
        };
        return Cherry.post('/drawing/graphy/update', postData);
    };

    static deleteFile (project, id, type, names) {
        let data = {
            project,
            id,
            type,
            names,
        };
        return Cherry.post('/drawing/graphy/delete', data);
    };

    static batchAddFile (project, files, overwrite) {
        let data = {
            project,
            files,
            overwrite,
        };
        return Cherry.post('/drawing/graphy/add/multi', data);
    };

    static batchDeleteFile (project, files) {
        let data = {
            project,
            files,
        };
        return Cherry.post('/drawing/graphy/delete/multi', data);
    };
}
