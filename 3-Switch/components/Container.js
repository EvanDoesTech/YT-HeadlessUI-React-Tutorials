export default (props) => {
  const { children } = props;
  return (
    <div className="flex items-center justify-center p-12">
      <div className="w-full max-w-xs mx-auto">{children}</div>
    </div>
  );
};
