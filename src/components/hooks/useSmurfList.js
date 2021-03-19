import useLocalStorage  from './useLocalStorage';

const useSmurfList = (initialValue) => {
  const [localStorage, setLocalStorage] = useLocalStorage("items", initialValue);
  return [localStorage, setLocalStorage]
}

export default useSmurfList;