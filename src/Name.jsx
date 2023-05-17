function Name(props) {
  const { value, onChange } = props;

  return (
    <input
      type="text"
      name="input_name"
      value={value}
      placeholder="Insira seu nome"
      onChange={onChange}
    />
  );
}

export default Name;
