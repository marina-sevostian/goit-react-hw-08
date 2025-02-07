import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#006400"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
