const formatCapacitySpec = (spec: string) =>
  spec.slice(0, -2) + '  ' + spec.slice(-2);

export default formatCapacitySpec;
