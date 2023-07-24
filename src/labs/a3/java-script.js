import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import Booleans from "./boolean-variables"
import Conditionals from "./if-else";
import Ternary from "./ternary-operator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');

    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <Booleans/>
            <Conditionals/>
            <Ternary/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
}
export default JavaScript