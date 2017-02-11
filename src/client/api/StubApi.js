export default class StubApi {
  get(value) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value)
          return resolve(value);
        return reject();
      }, 2500);
    });

    return promise;
  }
}
