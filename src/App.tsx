import React from "react";
import "./App.css";
import { addNum, addAction } from "./app/features/calculator/calcSlice";
import Button from "./components/Button";
import { useDispatch, useSelector } from "react-redux";
import {Dispatch} from "redux";

interface IState {
  nums: Array<number>;
  result: number;
  actions: Array<string>;
  additionalActions: Array<string>;
}

function App() {
  const dispatch = useDispatch();
  const { nums, result, actions, additionalActions } = useSelector(
    (state: IState) => state
  );
  return (
    <div className="container">
      <div className="calculator-content__result">
        <input value={result.toString()} disabled className="result" />
      </div>
      <div className="calculator-content">
        <div>
          <div className="calculator-content__additional">
            {additionalActions.map((action:string, id:number) => (
                <>
                  {action === "/" ? (
                      <Button
                          key={id}
                          color="orange"
                          action={() => dispatch(addAction(action))}
                          text={action.toString()}
                      />
                  ) : (
                      <Button
                          key={id}
                          color="lightgray"
                          action={() => dispatch(addAction(action))}
                          text={action.toString()}
                      />
                  )}
                </>
            ))}
          </div>
          <div className="calculator-content__nums">
            {nums.map((num:number, id:number) => (
                <>
                  {num === 0 ? (
                      <div key={id} className="btn-gray__zero">
                        <Button
                            text={num.toString()}
                            color="gray"
                            action={() => dispatch(addNum(num))}
                        />
                      </div>
                  ) : (
                      <div key={id} style={{ marginTop: "10px" }}>
                        <Button
                            text={num.toString()}
                            key={id}
                            color="gray"
                            action={() => dispatch(addNum(num))}
                        />
                      </div>
                  )}
                </>
            ))}
          </div>
        </div>
        <div className="calculator-content__actions">
          {actions.map((action) => (
              <Button color="orange" action={() => dispatch(addAction(action))} text={action}/>
          ))}
        </div>

        </div>

        <div className="calculator-content_buttons">
          <div className="calculator-content__part">
            {/*<div className="calculator-content__nums">
              {nums.map((num:number, id:number) => (
                <>
                  {num === 0 ? (
                    <div key={id} className="btn-gray__zero">
                      <Button
                        text={num.toString()}
                        color="gray"
                        action={() => dispatch(addNum(num))}
                      />
                    </div>
                  ) : (
                    <div key={id} style={{ marginTop: "10px" }}>
                      <Button
                        text={num.toString()}
                        key={id}
                        color="gray"
                        action={() => dispatch(addNum(num))}
                      />
                    </div>
                  )}
                </>
              ))}
            </div>*/}
          </div>
        </div>
      </div>
  );
}

export default App;
