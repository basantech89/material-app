import apiFactory, { APIFactory } from "./apiFactory"

interface BackendService extends APIFactory {
  baseUrl: string
  init(): void
  healthCheck(): Promise<string>
}

const backendService = {
  baseUrl: 'https://ill-jade-cardigan.cyclic.app/',

  init() {
    this.setBaseUrl(this.baseUrl)
  },
  
  healthCheck () {
    return this.get<string>('')
  }
} as BackendService

Object.setPrototypeOf(backendService, apiFactory)

export default backendService