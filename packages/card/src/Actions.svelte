<div
  bind:this={element}
  use:useActions={use}
  use:forwardEvents
  class={classMap({
    [className]: true,
    'mdc-card__actions': true,
    'mdc-card__actions--full-bleed': fullBleed,
  })}
  {...$$restProps}
>
  <slot />
</div>

<script lang="ts">
  import { setContext } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import type { ActionArray } from '@smui/common/internal';
  import {
    forwardEventsBuilder,
    classMap,
    useActions,
  } from '@smui/common/internal';

  const forwardEvents = forwardEventsBuilder(get_current_component());

  // Remember to update types file if you add/remove/rename props.
  export let use: ActionArray = [];
  let className = '';
  export { className as class };
  export let fullBleed = false;

  let element: HTMLDivElement;

  setContext('SMUI:button:context', 'card:action');
  setContext('SMUI:icon-button:context', 'card:action');

  export function getElement() {
    return element;
  }
</script>
