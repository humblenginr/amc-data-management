
export const If = (props: { condition: boolean, children: JSX.Element }): JSX.Element | null => {
  if (!!props.condition) return props.children
  return null
}
