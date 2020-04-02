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