export function sum (a, b) {
  return a + b
}

export function sub (a, b) {
  return a - b
}

export function mul (a, b) {
  return a * b
}

export function div (a, b) {
  try {
    return a / b
  } catch {
    return 0
  }
}
