/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise.then((data) => {
      resolve(asyncTransformer(data));
    },
    (error) => {
      reject(error);
    }
    );
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then((data) => {
    return slowAsyncProcess(data);
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    return getUserById(userId).then((user) => {
      if (!user) return undefined;
      return getOrganizationById(user.organizationId).then((organization) => {
        return { ...user, organization };
      },
      () => {
        return undefined;
      }
    );
  });
};
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};