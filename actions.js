export const actionTypes = {
  FAILURE: "FAILURE",
  LOAD_DATA: "LOAD_DATA",
  LOAD_DATA2: "LOAD_DATA2",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  LOAD_DATA2_SUCCESS: "LOAD_DATA2_SUCCESS",
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function loadData(arg) {
  return { type: actionTypes.LOAD_DATA, arg };
}

export function loadData2(arg) {
  return { type: actionTypes.LOAD_DATA2, arg };
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadData2Success(data) {
  return {
    type: actionTypes.LOAD_DATA2_SUCCESS,
    data,
  };
}
