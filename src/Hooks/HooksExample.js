import UseStateHookExample from "./UseStateHookExample";
import UseEffectHookExample from "./UseEffectHookExample";
import UseReducerHookExample from "./UseReducerHookExample";
import WithoutContext from "./WithoutContext";
import WithContext from "./WithContext";

const HooksExample = () => {
    return (<div className="m-4">
        <WithContext />
        <WithoutContext />
        <UseReducerHookExample />
        <UseStateHookExample />
        <UseEffectHookExample />
    </div>);
}

export default HooksExample;