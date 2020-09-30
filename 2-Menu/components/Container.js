export default (props) => {
  const { children } = props;
  return (
    <div className="mt-8 flex flex-col justify-center">
      <div className="m-auto w-1/3">{children}</div>
    </div>
  );
};
