interface IFetcher {
  url: string
  method: string
  isPublic: boolean
  body?: any
  bearer?: string
  isUpload?: boolean | null
}

const fetcher = (fetchConfig: IFetcher) => {
  const { url, method, isPublic, body, bearer, isUpload } = fetchConfig

  // set req header
  const headers = isPublic
    ? {
        'Content-Type': 'application/json',
      }
    : {
        Authorization: `Bearer ${bearer}`,
        Accept: 'application/json, multipart/form-data',
        ...(!isUpload ? { 'Content-Type': 'application/json' } : {}), // conditional for file type upload
      }

  // set req options and body
  const options =
    method === 'POST'
      ? { method, headers, ...(!isUpload ? { body: JSON.stringify(body) } : { body }) }
      : {
          method,
          headers,
        }

  return fetch(url, options)
    .then((resp) => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp)
      }
      return resp.json()
    })
    .then((data) => {
      return data
    })
    .catch((e) => {
      console.log(!e)
      // return error response
      return e?.json().then((resp: any) => {
        return Promise.reject(resp)
      })
    })
}

export default fetcher
