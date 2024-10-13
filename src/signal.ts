type Subscription = () => void;

const context: Subscription[] = [];

function getCurrentObserver() {
  return context[context.length - 1];
}

export function createSignal<T>(value: T) {
  const subscribers = new Set<Subscription>();

  const read = () => {
    const current = getCurrentObserver();
    if (current) subscribers.add(current);
    return value;
  };

  const write = (nextValue: T) => {
    value = nextValue;
    for (const sub of subscribers) sub();
  };

  return [read, write] as const;
}

export function createEffect(fn: () => void) {
  const execute = () => {
    context.push(execute);
    try {
      fn();
    } finally {
      context.pop();
    }
  };
  execute();
}
