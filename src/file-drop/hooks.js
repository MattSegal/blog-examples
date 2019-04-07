import React, { useRef, useState } from 'react'

export const useFileDrop = onDropFiles => {
  const ref = useRef(null)
  const [drag, setDrag] = useState(false)
  const onDragOver = val => e => {
    e.stopPropagation()
    e.preventDefault()
    setDrag(val)
  }
  const onDrop = e => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onDropFiles(e.dataTransfer.files[0])
    }
    setDrag(false)
  }
  const onChange = e => {
    const files = e.target.files
    if (files.length > 0) {
      onDropFiles(files[0])
      e.target.value = null
    }
  }
  const onClick = () => {
    ref.current.click()
  }
  const HiddenInput = () => (
    <input type="file" style={{ display: 'none' }} onChange={onChange} ref={ref} />
  )
  const DropBox = props => (
    <div
      onDragEnter={onDragOver(true)}
      onDragLeave={onDragOver(false)}
      onDragOver={onDragOver(true)}
      onDrop={onDrop}
      {...props}
    />
  )
  return {
    DropBox,
    HiddenInput,
    onClick,
    drag,
  }
}
