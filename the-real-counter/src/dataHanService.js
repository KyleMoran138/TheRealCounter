const APP_NAME  = 'thisIsAComponent';
const MAX_TIME = 1000;

function _writeRawDataToLocalStorage(dataObject){
  localStorage.setItem(APP_NAME, JSON.stringify(dataObject));
}

function _readRawDataFromLocalStorage(){
  localStorage.getItem(APP_NAME);
}

function _writeRawDataToEndpoint(dataObject, endpoint){
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('POST', endpoint, true);
    request.onload = (response) => {
      if(response.status < 200 || request.status < 400) reject({
        'status': request.status,
        'message': request.message || "",
        'data': {},
      });
      resolve({
        'status': request.status,
        'message': request.message,
        'data': request.data,
      });
      reject("Error::API::requestPassedResolve");
    };
    request.send();
    setTimeout(() => reject(`Error::API::requestTimeOut(${MAX_TIME}ms)`), MAX_TIME);
  });

}