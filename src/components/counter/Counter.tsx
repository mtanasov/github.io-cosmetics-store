import { style } from "./style_counter";

export default (props: { count: any; state: boolean; context: string }) => {
  return (
    <div style={style.main(props.state, props.context)}>{props.count}</div>
  );
};
