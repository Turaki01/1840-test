export const handleAxiosError = (error: any) => {
    let data: any = { config: error.config };
    if (error.response) {
      if (error.response.status === 404) {
        data = {
          ...error.response.data
        };
        return data;
      }
  
      data = {
        ...error.response.data
      };
      return data;
    }
  };
  