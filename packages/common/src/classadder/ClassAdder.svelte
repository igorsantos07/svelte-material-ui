<svelte:component
  this={component}
  bind:this={element}
  use={[forwardEvents, ...use]}
  class={classMap({
    [className]: true,
    [smuiClass]: true,
    ...smuiClassMap,
  })}
  {...props}
  {...$$restProps}><slot /></svelte:component
>

<script lang="ts" context="module">
  import type { ClassAdderInternals } from './ClassAdder.types.js';
  import Div from '../elements/Div.svelte';
  import type { DivComponentDev } from '../elements/Div.types.js';

  export const internals: ClassAdderInternals<typeof DivComponentDev> = {
    component: Div as typeof DivComponentDev,
    class: '',
    classMap: {},
    contexts: {},
    props: {},
  };
</script>

<script lang="ts">
  import { onDestroy, getContext, setContext } from 'svelte';
  import type { SvelteComponentDev } from 'svelte/internal';
  import { get_current_component } from 'svelte/internal';

  import type { ActionArray } from '../internal/useActions.js';
  import { forwardEventsBuilder } from '../internal/forwardEventsBuilder.js';
  import { classMap } from '../internal/classMap.js';

  export let use: ActionArray = [];
  let className = '';
  export { className as class };

  let element: SvelteComponentDev;
  const smuiClass = internals.class;
  const smuiClassMap: { [k: string]: any } = {};
  const smuiClassUnsubscribes: (() => void)[] = [];
  const contexts = internals.contexts;
  const props = internals.props;

  export let component: typeof SvelteComponentDev = internals.component;

  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context) as SvelteStore<any>;

    if (store && 'subscribe' in store) {
      smuiClassUnsubscribes.push(
        store.subscribe((value) => {
          smuiClassMap[name] = value;
        })
      );
    }
  });

  const forwardEvents = forwardEventsBuilder(get_current_component());

  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }

  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });

  export function getElement(): ReturnType<
    InstanceType<typeof component>['getElement']
  > {
    return element.getElement();
  }
</script>
