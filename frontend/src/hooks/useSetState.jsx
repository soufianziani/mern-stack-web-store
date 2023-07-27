const useSetState = () => {
  const setState = (e, state, stateFunction)=>{
  const { name, value } = e.target;
    stateFunction({ ...state, [name]: value });
  }
  return setState
}

export default useSetState