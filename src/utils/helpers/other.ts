type AnyFunction = (...args: any[]) => any;

export function nullIfError<Func extends AnyFunction>(func: Func) {
    return async function(...args: Parameters<Func>) {
      try {
        return await func(...args);
      } catch (error) {
        console.log(error);
        return null;
      }
    };
  }
  
