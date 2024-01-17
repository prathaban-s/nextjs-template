interface EndpointObj {
  url: string;
  method?: string;
}

const endpoint = {};

const params = (
  endpointObj: EndpointObj,
  ...params: string[]
): { url: string; method?: string } => {
  let iteration = 0;
  const urlWithParams = endpointObj?.url.replace(
    /:([a-zA-Z0-9]+)/g,
    (match: string, contents: string) => {
      if (params[iteration]) {
        contents = params[iteration];
        iteration++;
      }
      return contents;
    }
  );

  return { url: urlWithParams, method: endpointObj?.method };
};
export { endpoint, params };
