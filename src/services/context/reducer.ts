export const actionTypes = {
  SET_BMI: "SET_BMI",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.SET_BMI:
      return {
        ...state,
        bmi: action.bmi,
      };
    default:
      return state;
  }
};

export default reducer;
