// pages/api.js
import config from './apiConfig';
import { ApiHelper } from './apiUtils';

export class Api {
  constructor(request) {
    this.apiHelper = new ApiHelper(request);
  }

  async getMethods(pathName, parameterName) {
    switch (pathName) {
      case 'GetPosts':
        this.apiHelper.setEndpoint(config.endpoints.posts);
        break;
      case 'GetPostById':
        this.apiHelper.setEndpoint(config.endpoints.postById(parameterName));
        break;
      default:
        throw new Error(`Unsupported path name: ${pathName}`);
    }
    return await this.apiHelper.sendRequest('GET');
  }

  async postMethods(pathName, body) {
    switch (pathName) {
      case 'CreatePost':
        this.apiHelper.setEndpoint(config.endpoints.posts);
        this.apiHelper.addRequestBody(body);
        break;
      default:
        throw new Error(`Unsupported path name: ${pathName}`);
    }
    return await this.apiHelper.sendRequest('POST');
  }

  async patchMethods(pathName, body, parameterName) {
    switch (pathName) {
      case 'UpdatePost':
        this.apiHelper.setEndpoint(config.endpoints.postById(parameterName));
        this.apiHelper.addRequestBody(body);
        break;
      default:
        throw new Error(`Unsupported path name: ${pathName}`);
    }
    return await this.apiHelper.sendRequest('PATCH');
  }

  async deleteMethods(pathName, parameterName) {
    switch (pathName) {
      case 'DeletePost':
        this.apiHelper.setEndpoint(config.endpoints.postById(parameterName));
        break;
      default:
        throw new Error(`Unsupported path name: ${pathName}`);
    }
    return await this.apiHelper.sendRequest('DELETE');
  }
}
