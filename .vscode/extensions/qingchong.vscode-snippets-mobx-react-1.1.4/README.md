# vscode-snippets-mobx-react README

create code snippets at mobx react
now it can support rematch!

## normal

|  Prefix | Method                                        |
| ------: | --------------------------------------------- |
|  `imp→` | `import moduleName from 'module'`             |
|  `imn→` | `import 'module'`                             |
|  `imd→` | `import { destructuredModule } from 'module'` |
|  `exp→` | `export default moduleName`                   |
|  `enf→` | `export const functionName = (params) => { }` |
|  `edf→` | `export default (params) => { }`              |
|  `met→` | `methodName = (params) => { }`                |
|  `fre→` | `arrayName.forEach(element => { }`            |
|  `fof→` | `for(let itemName of objectName { }`          |
|  `fin→` | `for(let itemName in objectName { }`          |
|  `sti→` | `setInterval(() => { }, intervalTime`         |
|  `sto→` | `setTimeout(() => { }, delayTime`             |
| `prom→` | `return new Promise((resolve, reject) => { }` |
|   `cp→` | `const { } = this.props`                      |
|   `cs→` | `const { } = this.state`                      |

## React

|   Prefix | Method                                                              |
| -------: | ------------------------------------------------------------------- |
|   `est→` | `this.state = { }`                                                  |
|   `cwm→` | `componentWillMount = () => { }` DEPRECATED!!!                      |
|   `cdm→` | `componentDidMount = () => { }`                                     |
|   `scu→` | `shouldComponentUpdate = (nextProps, nextState) => { }`             |
|  `cwup→` | `componentWillUpdate = (nextProps, nextState) => { }` DEPRECATED!!! |
|  `cdup→` | `componentDidUpdate = (prevProps, prevState) => { }`                |
|  `cwun→` | `componentWillUnmount = () => { }`                                  |
|  `cwun→` | `componentWillUnmount = () => { }`                                  |
| `gdsfp→` | `static getDerivedStateFromProps(nextProps, prevState) { }`         |
|  `gsbu→` | `getSnapshotBeforeUpdate = (prevProps, prevState) => { }`           |
|   `ren→` | `render() { return( ) }`                                            |
|   `sst→` | `this.setState({ })`                                                |
|   `ssf→` | `this.setState((state, props) => return { })`                       |
| `props→` | `this.props.propName`                                               |
| `state→` | `this.state.stateName`                                              |

### `rmcp`

```javascript
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

@inject('store')
@observer
export default class Add extends Component {
  static propTypes = {}
  render() {
    return <div />
  }
}
```

### `rmsc`

```javascript
import { observable, action, configure, runInAction } from 'mobx'

configure({ enforceActions: true })

export default class A {
  @observable
  name = ''

  @action
  async functionName(params) {
    runInAction(() => {})
  }
}
```

### `rmcpf`

```javascript
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
export default class $1 extends Component {
  static propTypes = {}
  render() {
    return <Fragment />
  }
}
```

### `rcws`

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Style from './index.less'

export default class $0 extends Component {
  static propTypes = {}
  constructor() {
    super()
    Style.use()
  }

  componentWillUnmount() {
    Style.unuse()
  }
  render() {
    return <></>
  }
}
```

### `rpsr`

```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createContainer } from 'utils/hoc'

class $1 extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }
  state = {}
  constructor(props) {
    super(props)
    //this.props.actions.get()
  }

  render() {
    return (
      <>
        <div />
      </>
    )
  }
}

const mapState = state => ({
  error: state.common.error
})

const mapDispatch = dispatch => ({
  actions: {
    // createDataTrack: dispatch.common.createDataTrack,
    get: dispatch.idx.get
  }
})

export default createContainer(
  connect(
    mapState,
    mapDispatch
  )($1)
)
```

### `trhp`

```javascript
// 创建taro  react hooks page
import { View, Navigator, Image, Text } from '@tarojs/components'
import { Container } from '@/components'
import { useStoreState, useStoreActions } from '@/peasy'
import { useEffect } from '@/hooks'
import global from '@/global'
import { dealParams } from '@/utils/index'
import './index.less'
export default function User() {
  const storeProps = useStoreState(state => state.xxx)
  const storeActions = useStoreActions(actions => actions.xxx)
  useEffect(fn, [])
  return <Container loading={storeProps.loading} error={storeProps.error} force={false} nav={{title: '小电'}} clear={storeActions._setError} />
}
User.config = {}
```

### `trcm`

```javascript
// 创建taro  react component
import PropTypes from 'prop-types'
import { Block, View } from '@tarojs/components'

export default function Component(props) {
  return (
    <Block>
      <View />
    </Block>
  )
}

Pagination.propTypes = {}
Pagination.defaultProps = {}
```

### `trms`

```javascript
// 创建taro redux model
import { actions } from '@/services/map/list/detail'
export default {
  form: null,
  sync: {
    updateForm(payload) {
      this.form = payload
    }
  },
  async: {
    async getDetail(payload) {
      // action 第二个参数 options 默认为{proxy: true}
      const data = await actions(payload)
      this.form = data
    }
  }
}
```

**Enjoy!**
