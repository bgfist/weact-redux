# Weact-Redux
Weact bindings for Redux

## install
```bash
npm i @bgfist/weact-redux
```
## Provider
```ts
import {Provider} from "@bgfist/weact-redux";
import store from ...

App(Provider(store)({
  onLoad(){},
  ...
}))

```

## connect
- redux state are injected into `data` field, so if your component provide its own data, weact-redux will check that they don't conflict

- redux actions are injected into `actions` field, weact-redux will check you don't overwrite this field.
> you can direct invoke `actions` in your `.wxml` file if your action creator don't consume any params.
> ```xml
> <view>
>   <button bindtap="actions.changeAge"></button>
> </view>
> ```

- `connect` accept the second optional param to infer whether the connect are for `Component`

### native-style
```ts
import { connect } from "@bgfist/weact-redux";

// demo action creator
const changeAge = (payload) => {
  return {
    type: "changeAge",
    payload
  }
}

const mapStateToData = (state) => {
  return {
    age: state.age,
    ...
  }
}

const mapDispatchToActions = (dispatch) => {
  return {
    changeAge: (payload) => dispatch(changeAge(payload))
    ...
  }
}

// you can also write like below to inject boundedActionCreators: 
// const mapDispatchToActions = { changeAge, ... }

Page(connect(mapStateToData, mapDispatchToActions)({
  ...
  data: {
    name: "weact-redux", // add your inner data here
    age: 20, // error! this field conflict with redux state
    ...
  },
  onLoad(){
    this.actions.changeAge(10)
  }
}, 
false // can be omitted, "true" for Component 
))
```

### class-style
```ts
import { WXPage } from "@bgfist/weact";
import { connect } from "@bgfist/weact-redux";

type Data = ReturnType<typeof mapStateToData>
type Actions = ReturnType<typeof mapDispatchToActions>

class DemoPage extends WXPage<Data, Actions> {}

new DemoPage().init(connect(mapStateToData, mapDispatchToActions));
```

### hook-style
```ts
import { useSelector, useActionCreator } from "@bgfist/weact-redux";

function Demo() {
  const age = useSelector(state=> state.age);
  const changeAgeAction = useActionCreator(changeAge);

  const onTapSomething = () => changeAgeAction(10);

  return {
    age,
    onTapSomething
  }
}
```