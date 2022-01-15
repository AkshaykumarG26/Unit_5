

export const Form = (onSubmit, children, title) => {
  return (
    <form onSubmit={onSubmit}>
      {" "}
      <h3>{title}</h3> {children}
    </form>
  );
};
