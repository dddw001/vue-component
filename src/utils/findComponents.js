// 由一个组件，向上找到最近的指定组件
export const findComponentUpward = function (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

// 由一个组件，向上找到所有的指定组件
export const findComponentsUpward = function (context, componentName) {
  let parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

// 由一个组件，向下找到最近的指定组件
export const findComponentDownward = function (context, componentName) {
  const children = context.$children
  let foundChild = null

  if (children.length) {
    for (const child of children) {
      const name = child.$options.name

      if (name === componentName) {
        foundChild = child
        break
      } else {
        foundChild = findComponentDownward(child, componentName)
        if (foundChild) break
      }
    }
  }
  return foundChild
}

// 由一个组件，向下找到所有指定的组件
export const findComponentsDownward = function (context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChildren = findComponentsDownward(child, componentName)
    return components.concat(foundChildren)
  }, [])
}

// 由一个组件，找到指定组件的兄弟组件
export const findBrothersComponents = function (context, componentName, exceptMe = true) {
  let res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  let index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}