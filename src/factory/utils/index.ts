const setPrototype = <S extends object, T extends object>(source: S, target: T): T & S => {
  const newTarget = { ...target }
  Object.setPrototypeOf(source, newTarget)
  return newTarget as T & S
}

export { setPrototype }
