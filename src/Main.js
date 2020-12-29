import React from 'react'
import SvelteComponent from 'react-svelte'
import Widget from './Widget.svelte'

export default function () {
  return (
    <SvelteComponent this={Widget} />
  )
}
