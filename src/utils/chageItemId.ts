interface Args {
  target: string;
  initItemId: string;
  initColor: string;
  initCapacity: string;
}

const changeItemId = ({
  target,
  initCapacity,
  initColor,
  initItemId,
}: Args) => {
  let newItemId = '';
  const lower = target?.toLowerCase();
  const isChangeItemId = initItemId?.includes(lower);
  const splittedId = initItemId?.split('-');
  const isSelectedCapacity = /gb|tb|mm/i.test(lower);
  const currentColor = splittedId?.indexOf(initColor);
  const currentCapacity = splittedId?.indexOf(initCapacity?.toLowerCase());

  if (isSelectedCapacity && !isChangeItemId) {
    newItemId = splittedId
      .slice(0, currentCapacity)
      .concat(lower, initColor)
      .join('-');
  } else {
    newItemId = splittedId.slice(0, currentColor).concat(lower).join('-');
  }

  return newItemId;
};

export default changeItemId;
