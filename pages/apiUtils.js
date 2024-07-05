// pages/apiUtils.js
import { APIRequestContext } from '@playwright/test';

export class ApiHelper {
  constructor(request) {
    this.request = request;
    this.baseUrl = '';
    this.url = '';
    this.headers = {};
    this.requestBody = {};
    this.response = {};
    this.responseBody = {};
    this.status = 0;
    this.responseTime = 0;
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
  }

  setEndpoint(endpoint) {
    this.url = `${this.baseUrl}${endpoint}`;
  }

  addContentType(contentType) {
    this.headers['Content-Type'] = contentType;
  }

  addAuthorization(token) {
    this.headers['Authorization'] = `Bearer ${token}`;
  }

  addHeader(key, value) {
    this.headers[key] = value;
  }

  addRequestBody(body) {
    this.requestBody = body;
  }

  async sendRequest(method) {
    const startTime = Date.now();
    switch (method.toLowerCase()) {
      case 'get':
        this.response = await this.request.get(this.url, { headers: this.headers });
        break;
      case 'post':
        this.response = await this.request.post(this.url, { headers: this.headers, data: this.requestBody });
        break;
      case 'post_file':
        this.response = await this.request.post(this.url, { headers: this.headers, multipart: this.requestBody });
        break;
      case 'put':
        this.response = await this.request.put(this.url, { headers: this.headers, data: this.requestBody });
        break;
      case 'delete':
        this.response = await this.request.delete(this.url, { headers: this.headers, data: this.requestBody || {} });
        break;
      case 'patch':
        this.response = await this.request.patch(this.url, { headers: this.headers, data: this.requestBody });
        break;
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }

    this.responseTime = Date.now() - startTime;
    this.status = this.response.status();

    const contentType = this.response.headers()['content-type'];
    if (contentType && contentType.toLowerCase().includes('application/json')) {
      this.responseBody = await this.response.json();
    } else {
      this.responseBody = await this.response.text();
    }
    return { data: this.responseBody, response: this.response, status: this.status, time: this.responseTime };
  }

  async getAllResponseInfo() {
    return { data: this.responseBody, response: this.response, status: this.status, time: this.responseTime };
  }
}
