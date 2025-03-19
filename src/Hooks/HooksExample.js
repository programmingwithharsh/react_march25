import UseStateHookExample from "./UseStateHookExample";
import UseEffectHookExample from "./UseEffectHookExample";
import UseReducerHookExample from "./UseReducerHookExample";

const HooksExample = () => {
    return (<div className="m-4">
        <UseReducerHookExample />
        <UseStateHookExample />
        <UseEffectHookExample />
    </div>);
}

export default HooksExample;