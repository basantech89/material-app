export interface APIFactory {
  baseUrl: string
  headers: HeadersInit
  setBaseUrl(url: string): void
  setHeaders(headers: HeadersInit): void
  get<T>(path: string, headers?: HeadersInit): Promise<T>
  post<T, D = unknown>(
    path: string,
    data: D,
    headers?: HeadersInit
  ): Promise<T>
  put<T, D = unknown>(
    path: string,
    data: D,
    headers?: HeadersInit
  ): Promise<T>
}

const apiFactory: APIFactory = {
	baseUrl: '',
	headers: {},

	setBaseUrl(url) {
		this.baseUrl = url
	},

	setHeaders(headers) {
		this.headers = headers
	},

	get(path, headers) {
		return fetch(`${this.baseUrl}/${path}`, {
			headers: { ...this.headers, ...headers }
		}).then(res => res.json())
	},

	post(path, data, headers) {
		return fetch(`${this.baseUrl}/${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
			headers: {
				...this.headers,
				...headers
			}
		}).then(res => res.json())
	},

	put(path,	data,	headers) {
		return fetch(`${this.baseUrl}/${path}`, {
      method: 'PUT',
      body: JSON.stringify(data),
			headers: {
				...this.headers,
				...headers
			}
		}).then(res => res.json())
	}
}

export default apiFactory
