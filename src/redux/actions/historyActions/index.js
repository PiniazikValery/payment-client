export const CALL_HISTORY_METHOD = 'CALL_HISTORY_METHOD';

export const callHistoryMethod = (methodName, methodArguments) => ({
  type: CALL_HISTORY_METHOD,
  payload: {
    methodName,
    methodArguments,
  },
});
